const awsConfig = {
    Auth: {
      region: "ap-south-1",
      userPoolId: "ap-south-1_ryHGkalsV",
      userPoolWebClientId: "52udp4mn3u32l53e1p9pmhs9kt",
      mandatorySignIn: true,
      oauth: {
        domain: "ap-south-1ryhgkalsv.auth.ap-south-1.amazoncognito.com",
        scope: ["openid", "email", "profile"],
        redirectSignIn: "https://d3ciw6o5yt2dho.cloudfront.net/",
        redirectSignOut: "https://d3ciw6o5yt2dho.cloudfront.net/",
        responseType: "code",
      },
    },
  };
  
  export default awsConfig;
  