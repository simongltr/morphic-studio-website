export interface GalleryTile {
  color: string;
}

export interface GalleryColumn {
  /** Vertical translate range (in %) applied during the viewport crossing. */
  yRange: number;
  tiles: GalleryTile[];
}

export const galleryColumns: GalleryColumn[] = [
  {
    yRange: -12,
    tiles: [
      { color: "linear-gradient(135deg, #d4bf95 0%, #a88860 100%)" },
      { color: "linear-gradient(135deg, #6f8fa8 0%, #3c5d80 100%)" },
      { color: "linear-gradient(135deg, #9685b3 0%, #5e4d7c 100%)" },
    ],
  },
  {
    yRange: 10,
    tiles: [
      { color: "linear-gradient(135deg, #87a892 0%, #4e7560 100%)" },
      { color: "linear-gradient(135deg, #c79188 0%, #94504a 100%)" },
      { color: "linear-gradient(135deg, #d4bf95 0%, #a88860 100%)" },
    ],
  },
  {
    yRange: -16,
    tiles: [
      { color: "linear-gradient(135deg, #6f8fa8 0%, #3c5d80 100%)" },
      { color: "linear-gradient(135deg, #c79188 0%, #94504a 100%)" },
      { color: "linear-gradient(135deg, #87a892 0%, #4e7560 100%)" },
    ],
  },
];
