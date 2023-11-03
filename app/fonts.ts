import { Roboto } from "next/font/google";
import {Edu_TAS_Beginner} from "next/font/google"
export const roboto = Roboto({
  subsets:['latin'],
  weight:'500',
  variable:'--font-roboto',
});

export const edu = Edu_TAS_Beginner({
  subsets:['latin'],
  weight:'500',
  variable:'--font-edu',
});