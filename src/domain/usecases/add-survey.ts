import { SurveyAnswerModel } from "../models/survey";

export interface AddSurveyModel {
  question: string;
  answers: SurveyAnswerModel[];
  date: Date;
}

export interface SurveyAnswer {
  image?: string;
  answer: string;
}

export interface AddSurvey {
  add(data: AddSurveyModel): Promise<void>;
}
