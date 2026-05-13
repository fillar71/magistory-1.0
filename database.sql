-- Magistory Database Schema
-- Video editing application database

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User profiles
CREATE TABLE IF NOT EXISTS user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(100),
    bio TEXT,
    profile_picture_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Video projects
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    thumbnail_url VARCHAR(255),
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Media assets
CREATE TABLE IF NOT EXISTS media_assets (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size INTEGER NOT NULL,
    duration INTEGER,
    width INTEGER,
    height INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Project timelines
CREATE TABLE IF NOT EXISTS timelines (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Timeline tracks
CREATE TABLE IF NOT EXISTS tracks (
    id SERIAL PRIMARY KEY,
    timeline_id INTEGER REFERENCES timelines(id) ON DELETE CASCADE,
    track_type VARCHAR(20) NOT NULL, -- 'video', 'audio', 'text', 'image'
    position INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Timeline clips
CREATE TABLE IF NOT EXISTS clips (
    id SERIAL PRIMARY KEY,
    track_id INTEGER REFERENCES tracks(id) ON DELETE CASCADE,
    media_asset_id INTEGER REFERENCES media_assets(id) ON DELETE SET NULL,
    start_time INTEGER NOT NULL,
    end_time INTEGER NOT NULL,
    position_x INTEGER DEFAULT 0,
    position_y INTEGER DEFAULT 0,
    scale_x FLOAT DEFAULT 1.0,
    scale_y FLOAT DEFAULT 1.0,
    rotation FLOAT DEFAULT 0,
    opacity FLOAT DEFAULT 1.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transitions
CREATE TABLE IF NOT EXISTS transitions (
    id SERIAL PRIMARY KEY,
    clip_id INTEGER REFERENCES clips(id) ON DELETE CASCADE,
    transition_type VARCHAR(50) NOT NULL,
    duration INTEGER DEFAULT 500,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Effects
CREATE TABLE IF NOT EXISTS effects (
    id SERIAL PRIMARY KEY,
    clip_id INTEGER REFERENCES clips(id) ON DELETE CASCADE,
    effect_type VARCHAR(50) NOT NULL,
    parameters JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Text overlays
CREATE TABLE IF NOT EXISTS text_overlays (
    id SERIAL PRIMARY KEY,
    clip_id INTEGER REFERENCES clips(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    font_family VARCHAR(100),
    font_size INTEGER,
    font_color VARCHAR(20),
    background_color VARCHAR(20),
    position_x INTEGER,
    position_y INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Project exports
CREATE TABLE IF NOT EXISTS exports (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    export_format VARCHAR(20) NOT NULL,
    resolution VARCHAR(20) NOT NULL,
    quality VARCHAR(20),
    file_url VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_media_assets_project ON media_assets(project_id);
CREATE INDEX idx_clips_track ON clips(track_id);
CREATE INDEX idx_clips_media ON clips(media_asset_id);
CREATE INDEX idx_timelines_project ON timelines(project_id);
CREATE INDEX idx_tracks_timeline ON tracks(timeline_id);
CREATE INDEX idx_projects_user ON projects(user_id);