import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'app/shared/styling')],
  },
};

export default nextConfig;
