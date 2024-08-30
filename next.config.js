// next.config.js
module.exports = {
    output: 'standalone',
    eslint:{
        //eslint 무시하고 강제로 빌드하는 코드
        ignoreDuringBuilds: true,
    },
    reactStrictMode: false,
    swcMinify:true,
    async rewrites() {
      return [
          {
                  ///api/:path* <-들어갈수있음
              source: '/api/:path*',
              //서버 포트8000에  api/:path api로 시작하는 모든 경로 연결 
              destination: 'http://MovieBack-env.eba-pmi92aap.ap-northeast-2.elasticbeanstalk.com:5000/api/:path*', //
          },
      ];
  },
};
