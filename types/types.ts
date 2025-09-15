// courses.types.ts

export interface Course {
  id: number; // Auto-generated identity
  cid: string; // Custom course ID (non-null)
  name?: string | null; // Course name, optional
  description?: string | null; // Description, optional
  noOfChapters: number; // Required number of chapters
  includeVideo: boolean; // Defaults to false
  level: string; // Required (beginner, intermediate, etc.)
  category?: string | null; // Optional category

  // JSON fields
  courseJson?: Record<string, any> | null;
  courseContent?: Record<string, any>;

  bannerImageUrl: string; // Default: ""

  // Relationship field
  userEmail: string; // References usersTable.email
}

// For inserting new courses where `id` and default fields aren't required
export type NewCourse = Omit<
  Course,
  "id" | "bannerImageUrl" | "includeVideo"
> & {
  id?: number;
  includeVideo?: boolean;
  bannerImageUrl?: string;
};
