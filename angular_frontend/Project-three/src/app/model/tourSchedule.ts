export interface TourSchedule {
  scheduleId?: number;
  tourPackageId: number;
  tourGuideId: number;
  tourDate: string; // ISO format
  itineraryDetails: string;
}
