export type PhoneModelId = string;

export type Keypoint = {
  name: string;
  x: number; // pixels
  y: number; // pixels
  score: number; // 0..1
};

export type MeasurementInput = {
  imageWidth: number;
  imageHeight: number;
  phoneModelId: PhoneModelId;
  phonePixelHeight: number; // measured from detection
  keypoints: Keypoint[];
  segmentationConfidence: number; // 0..1
};

export type MeasurementResult = {
  algorithmVersion: string;
  scaleMmPerPixel: number;
  measurementsMm: {
    chest?: number;
    waist?: number;
    hips?: number;
    inseam?: number;
    shoulderWidth?: number;
  };
  confidence: {
    overall: number; // 0..1
    perMeasurement: Record<string, number>;
  };
};

export function computeScaleMmPerPixel(
  phonePhysicalHeightMm: number,
  phonePixelHeight: number,
): number {
  if (phonePixelHeight <= 0) throw new Error('phonePixelHeight must be > 0');
  return phonePhysicalHeightMm / phonePixelHeight;
}
