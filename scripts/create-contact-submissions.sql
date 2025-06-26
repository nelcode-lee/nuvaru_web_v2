-- Drop table if it exists (for clean setup)
DROP TABLE IF EXISTS contact_submissions;

-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  service_type VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Insert test records to verify the table works
INSERT INTO contact_submissions (name, email, company, phone, service_type, message, ip_address) 
VALUES 
  (
    'Test User 1', 
    'test1@example.com', 
    'Test Company Ltd', 
    '+44 123 456 7890', 
    'AI Readiness Assessment', 
    'This is a test contact submission to verify the database is working correctly. We are interested in learning more about your AI readiness assessment services.',
    '127.0.0.1'
  ),
  (
    'Jane Smith', 
    'jane.smith@example.com', 
    'Innovation Corp', 
    '+44 987 654 3210', 
    'Custom AI Solutions', 
    'We would like to discuss custom AI solutions for our logistics operations. Please contact us to arrange a consultation.',
    '127.0.0.1'
  ),
  (
    'John Doe', 
    'john.doe@example.com', 
    'Tech Startup', 
    NULL, 
    'Process Automation', 
    'Looking for process automation solutions to streamline our workflow. When would be a good time to discuss our requirements?',
    '127.0.0.1'
  );

-- Verify the data was inserted
SELECT COUNT(*) as total_records FROM contact_submissions;
SELECT * FROM contact_submissions ORDER BY created_at DESC;
