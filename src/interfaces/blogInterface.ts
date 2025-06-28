export interface BlogCreate {
  userId:         string    
  title:          string
  excerpt:        string
  image:          string   
  tags:           string[]
  category:       string
  content:        string
  location?:      string
  contactInfo?:   string
}

export interface BlogUpdate{
  id:             string
  userId:         string    
  title?:         string
  excerpt?:       string
  image?:         string   
  tags?:          string[]
  category?:      string
  content?:       string
  location?:      string
  contactInfo?:   string
}