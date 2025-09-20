export interface User {
  id: number;
  name: string;
  email: string;
  subscriptionId?: string | null;
}

export interface CourseTopic {
  topic: string;
  content: string;
}

export interface CourseData {
  chapterName: string;
  topics: CourseTopic[];
}

export interface CourseVideo {
  videoId: string;
}

export interface CourseContentItem {
  youtubeVideo: CourseVideo[];
  courseData: CourseData;
}

export interface Chapter {
  chapterName: string;
  duration: string | number;
  topics: string[];
}

export interface Course {
  id: number;
  cid: string;
  name?: string;
  description?: string | null;
  noOfChapters: number;
  includeVideo?: boolean;
  level: string;
  category?: string | null;
  courseJson?: {
    course?: {
      name?: string;
      description?: string;
      level?: string;
      chapters?: Chapter[];
      noOfChapters: number;
    };
  } | null;
  bannerImageUrl: string;
  courseContent?: CourseContentItem[];
  userEmail: string;
}

export interface EnrollCourse {
  id: number;
  cid: string;
  userEmail: string;
  completedChapter?: any[];
}
export interface CourseInfo {
  courses: Course;
  enrollCourse: EnrollCourse;
}

export interface YoutubeVideo {
  videoId: string;
  title: string;
}
