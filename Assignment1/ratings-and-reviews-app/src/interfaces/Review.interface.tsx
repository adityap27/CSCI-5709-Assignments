/**
 * Represents a user review with user details and review meta-data.
 */
export interface Review {
  id: number;
  user: {
    name: string;
    profilePic: string;
  };
  date: string;
  bookingPeriod: string;
  stars: number;
  text: string;
}
