import { CustomLoader } from '@/common/components/custom-loader/custom-loader.component';

export default function Loading() {
  return (
    <CustomLoader
      width={50}
      height={50}
      circleColor="gray700"
      className="flex-center min-h-screen"
    />
  );
}
