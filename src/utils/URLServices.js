import { config } from 'dotenv';

config();

export const HR_SERVICES_API_URL =
  process.env.HR_SERVICES_API_URL || 'http://localhost/api';

export const authService = `${HR_SERVICES_API_URL}/auth`;
export const positionService = `${HR_SERVICES_API_URL}/position`;
export const teamService = `${HR_SERVICES_API_URL}/team`;
export const employeeService = `${HR_SERVICES_API_URL}/employee`;
