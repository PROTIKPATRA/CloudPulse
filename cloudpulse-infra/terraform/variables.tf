variable "project_name" {
  description = "The core name for all resources"
  type        = string
  default     = "cloudpulse"
}

variable "location" {
  description = "Azure region to deploy resources"
  type        = string
  default     = "East US" 
}