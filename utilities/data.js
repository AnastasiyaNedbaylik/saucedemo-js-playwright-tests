import dotenv from 'dotenv';
dotenv.config();

export const users = {
  standard_user: {
    username: process.env.STANDARD_USER,
    password: process.env.STANDARD_PASSWORD,
  },
  locked_out_user: {
    username: process.env.LOCKED_OUT_USER,
    password: process.env.LOCKED_OUT_PASSWORD,
  },
  problem_user: {
    username: process.env.PROBLEM_USER,
    password: process.env.PROBLEM_PASSWORD,
  },
  performance_glitch_user: {
    username: process.env.PERFORMANCE_GLITCH_USER,
    password: process.env.PERFORMANCE_GLITCH_PASSWORD,
  },
  error_user: {
    username: process.env.ERROR_USER,
    password: process.env.ERROR_PASSWORD,
  },
  visual_user: {
    username: process.env.VISUAL_USER,
    password: process.env.VISUAL_PASSWORD,
  },
};

export const defaultUser = users.standard_user;
