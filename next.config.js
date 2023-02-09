module.exports = {
  images: {
    domains: [],
  },
  target: 'serverless',
  env: {
    BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  experimental: {
    cpus: 1,
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'content-type', value: 'application/json' }],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/images/emailsig/:path*', destination: 'https://rock.longhollow.com/Content/emailsig/:path*', permanent: true },
      { source: '/media/:path*', destination: '/:path*', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      {
        source: '/about/meet-our-staff',
        destination: '/search?category=Staff&p=1',
        permanent: false,
      },
      {
        source: '/app-link/:slug',
        destination: '/:slug',
        permanent: false,
      }, // cache test
      { source: '/feedback', destination: 'https://longhollow.wufoo.com/forms/vision-plan-strategy-feedback/', permanent: true },
      { source: '/identity', destination: 'https://longhollow.com/resources-about-sexuality-gender-and-identity', permanent: true },
      { source: '/retreat', destination: 'https://www.eventcreate.com/e/longhollowstaffretreat', permanent: true },
      { source: '/studentleader', destination: '/lh-student-leader', permanent: true },
      { source: '/moms', destination: '/intentional-mom', permanent: true },
      { source: '/dodgeball', destination: '/dodgeball-2022', permanent: true },
      { source: '/teacher', destination: 'https://longhollow.com/back-to-school-teacher-serve-week', permanent: true },
      { source: '/kidssummer', destination: 'https://longhollow.com/join-lh-kids-for-a-fun-filled-summer', permanent: true },
      { source: '/backtoschool', destination: 'https://my.longhollow.com/Registration/backtoschool-2022', permanent: true },
      { source: '/statement', destination: '/an-important-message-from-long-hollow-church', permanent: true },
      { source: '/israel', destination: 'https://signature.rezdy.com/502175/pastor-robby-gallaty-10-day-journey-to-the-holy-land-march-12-21-2023', permanent: true },
      { source: '/lightupthepike', destination: 'https://lightupthepike.com/', permanent: true },
      { source: '/cruisein', destination: 'https://longhollow.wufoo.com/forms/pyyg54d1egc91m/', permanent: true },
      { source: '/young-adults-weekly-gathering', destination: '/tuesday-night-gathering', permanent: true },
      { source: '/summerserve', destination: '/sign-up-to-use-your-gifts-at-summer-events', permanent: true },
      { source: '/loveourcity', destination: '/serve-your-community-during-love-our-city', permanent: true },
      { source: '/compassion', destination: '/our-partnership-with-compassion-international', permanent: true },
      { source: '/summerjam', destination: '/bring-your-family-to-summer-jam-with-lh-kids', permanent: true },
      { source: '/compassionvolunteer', destination: 'https://my.longhollow.com/Registration/compassion-vol-2022', permanent: true },
      { source: '/everyday', destination: '/get-the-everyday-life-podcast', permanent: true },
      { source: '/checkin', destination: '/how-to-check-in-for-kids-activities', permanent: true },
      { source: '/calling', destination: '/discover-your-calling', permanent: true },
      { source: '/camp', destination: 'https://longhollow.com/student-camp-2022', permanent: true },
      { source: '/mvmnt', destination: 'https://longhollow.com/mvmnt-2022', permanent: true },
      { source: '/game', destination: 'https://longhollow.com/family-game-night', permanent: true },
      { source: '/studentmissions', destination: 'hhttps://longhollow.com/studentspringbreakmissions2023', permanent: true },
      { source: '/21days', destination: 'https://longhollow.com/start-the-new-year-with-21-days-of-devotion', permanent: true },
      { source: '/share', destination: 'https://my.longhollow.com/Registration/share', permanent: true },
      { source: '/report', destination: 'https://annualreport.longhollow.com', permanent: true },
      { source: '/annualreport', destination: 'https://annualreport.longhollow.com', permanent: true },
      { source: '/feed', destination: '/first-responder-meal-deliveries', permanent: true },
      { source: '/spirit', destination: '/spirit-of-christmas-2021', permanent: true },
      { source: '/growtogether', destination: '/grow-together-november-2021', permanent: true },
      { source: '/legacy', destination: '/the-legacy-park-project', permanent: true },
      { source: '/legacypark', destination: '/the-legacy-park-project', permanent: true },
      { source: '/food', destination: 'https://longhollow.com/foodforfamilies2022', permanent: true },
      { source: '/girls-weekend', destination: 'https://longhollow.com/girls-weekend-2021', permanent: true },
      { source: '/guys-weekend', destination: 'https://longhollow.com/guys-weekend-2021', permanent: true },
      { source: '/vote', destination: 'https://rock.longhollow.com/page/1267', permanent: true },
      { source: '/fallfamily', destination: '/fall-family-fun-day-2021', permanent: true },
      { source: '/rhythms', destination: '/rhythms-september-2022', permanent: true },
      { source: '/survey', destination: 'https://www.surveymonkey.com/r/YFZMCFP', permanent: true },
      { source: '/hvillemap', destination: 'https://rock.longhollow.com/Content/ExternalSite/Downloads/HENDERSONVILLE_MAP_COMBO.pdf', permanent: true },
      { source: '/mensnextsteps', destination: '/next-steps-from-mens-night-2021', permanent: true },
      { source: '/prayernight', destination: '/prayer-night', permanent: true },
      { source: '/news/follow-the-f260-bible-reading-plan', destination: '/follow-the-f260-bible-reading-plan', permanent: true },
      { source: '/news/follow-the-f260-nt-bible-reading-plan', destination: '/follow-the-nt260-bible-reading-plan', permanent: true },
      { source: '/coming-up', destination: '/search?category=Events&p=1', permanent: true },
      { source: '/24-hours-of-prayer', destination: 'https://prayerteam.longhollow.com', permanent: true },
      { source: '/news/download-life-group-curriculum', destination: '/download-life-group-curriculum', permanent: true },
      { source: '/treasure-creek', destination: '/weekday-preschool', permanent: true },
      { source: '/today', destination: 'http://today.longhollow.com', permanent: true },
      { source: '/liveevents', destination: '/live-event-stream', permanent: true },
      { source: '/together', destination: '/prayer-team-and-prayer-requests', permanent: true },
      { source: '/21-days-of-devotion', destination: '/', permanent: true },
      { source: '/links', destination: '/links-shared-on-social-media', permanent: true },
      { source: '/staff-work-orders', destination: 'https://rock.longhollow.com/page/813', permanent: true },
      { source: '/deadlines-and-dates', destination: 'https://rock.longhollow.com/page/814', permanent: true },
      { source: '/staff-common-forms-and-documents', destination: 'https://rock.longhollow.com/page/1246', permanent: true },
      { source: '/missions', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/tablemenu', destination: 'https://docs.google.com/document/u/2/d/e/2PACX-1vS0ckSAxPL38NrJ7on2g7jVvF-DcRmwvWkcOt43clkB269vTPKPCO9A37Bk6aNkr8TkQpJ7M0iD87Ii/pub', permanent: true },
      { source: '/new', destination: 'https://my.longhollow.com/new', permanent: true },
      { source: '/next', destination: 'https://my.longhollow.com/NextSteps', permanent: true },
      { source: '/f260', destination: '/follow-the-f260-bible-reading-plan', permanent: true },
      { source: '/nt260', destination: '/follow-the-nt260-bible-reading-plan', permanent: true },
      { source: '/greecetrip', destination: 'https://discoverycruisesandtravel.com/tour/robby-and-kandi-gallaty/', permanent: true },
      { source: '/session1', destination: 'https://my.longhollow.com/StartingPoint1', permanent: true },
      { source: '/session2', destination: 'https://my.longhollow.com/startingpoint2', permanent: true },
      { source: '/session3', destination: 'https://my.longhollow.com/startingpoint3', permanent: true },
      { source: '/session4', destination: 'https://my.longhollow.com/startingpoint4', permanent: true },
      { source: '/servelink', destination: '/sign-up-for-serve-link', permanent: true },
      { source: '/app', destination: '/the-long-hollow-app', permanent: true },
      { source: '/supportgroups', destination: '/connect/support-groups', permanent: true },
      { source: '/beliefs', destination: '/about/beliefs', permanent: true },
      { source: '/guide', destination: 'https://rock.longhollow.com/Content/ExternalSite/Downloads/StartingPointGuide.pdf', permanent: true },
      { source: '/weekday', destination: '/weekday-preschool', permanent: true },
      { source: '/weekdaypreschool', destination: '/weekday-preschool', permanent: true },
      { source: '/removeme', destination: 'https://longhollow.wufoo.com/forms/pcbkc9o0kzgn5z/', permanent: true },
      { source: '/lhya', destination: 'https://rock.longhollow.com/newya', permanent: true },
      { source: '/contactme', destination: 'https://my.longhollow.com/registration/contactme', permanent: true },
      { source: '/build', destination: '/changes-to-our-hendersonville-campus', permanent: true },
      { source: '/memberprofile', destination: 'https://rock.longhollow.com/registration/memberprofile', permanent: true },
      { source: '/grouplink', destination: '/join-a-life-group', permanent: true },
      { source: '/infertility', destination: '/womens-infertility-and-miscarriage', permanent: true },
      { source: '/struggle', destination: '/supporting-those-who-struggle-2021', permanent: true },
      { source: '/safe', destination: '/safe-people', permanent: true },
      { source: '/upload', destination: 'https://forms.gle/WS4rZnbmwWNCZ6tL6', permanent: true },
      { source: '/2022', destination: '/the-2023-ministry-plan', permanent: true },
      { source: '/enjoy', destination: 'https://rock.longhollow.com/Content/ExternalSite/Downloads/Running-on-Empty-Booklet.pdf', permanent: true },
      { source: '/fc', destination: 'https://my.longhollow.com/registration/manup-fullcount', permanent: true },
      { source: '/invite', destination: '/', permanent: true },
      { source: '/groups', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/youngadult', destination: '/connect/young-adults', permanent: true },
      { source: '/youngadults', destination: '/connect/young-adults', permanent: true },
      { source: '/anxiety', destination: '/anxiety-support-group', permanent: true },
      { source: '/crisis', destination: '/connect/support-groups', permanent: true },
      { source: '/recovered', destination: 'https://www.amazon.com/Recovered-How-Accident-Alcohol-Addiction/dp/1535909838/ref=sr_1_1?crid=1LN3N6K7AN1FU&dchild=1&keywords=recovered+robby+gallaty&qid=1594240774&sprefix=recovered%2Caps%2C177&sr=8-1', permanent: true },
      { source: '/open', destination: '/about/schedule', permanent: true },
      { source: '/neighbor', destination: '/a-message-from-derwin-gray', permanent: true },
      { source: '/plan', destination: '/about/schedule', permanent: true },
      { source: '/resources', destination: 'https://longhollow.com/resources-about-sexuality-gender-and-identity', permanent: true },
      { source: '/groupresources', destination: '/group-leader-resources', permanent: true },
      { source: '/register', destination: 'https://longhollow.wufoo.com/forms/p1sy523v1vypask/', permanent: true },
      { source: '/help', destination: '/connect/support-groups', permanent: true },
      { source: '/online', destination: '/next-steps/join-us-online', permanent: true },
      { source: '/health', destination: '/about/schedule', permanent: true },
      { source: '/start', destination: '/next-steps/starting-point', permanent: true },
      { source: '/robbynotes', destination: '/wednesday-night-bible-study-notes', permanent: true },
      { source: '/startingpoint', destination: '/next-steps/starting-point', permanent: true },
      { source: '/support', destination: '/connect/support-groups', permanent: true },
      { source: '/marriage', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/testdrive', destination: '/next-steps/volunteer', permanent: true },
      { source: '/reallove', destination: '/watch/71ec2079298288ea22cabf29ff907d73/real-love', permanent: true },
      { source: '/care', destination: 'https://my.longhollow.com/NextSteps', permanent: true },
      { source: '/worship', destination: '/worship-team', permanent: true },
      { source: '/deacons', destination: '/nominate-a-deacon-2021', permanent: true },
      { source: '/deacon', destination: '/nominate-a-deacon-2021', permanent: true },
      { source: '/live', destination: '/next-steps/join-us-online', permanent: true },
      { source: '/greece', destination: 'https://discoverycruisesandtravel.com/tour/robby-and-kandi-gallaty/', permanent: true },
      { source: '/jobs', destination: '/connect/current-job-opportunities', permanent: true },
      { source: '/job-opportunities', destination: '/connect/current-job-opportunities', permanent: true },
      { source: '/surrendering', destination: '/surrendering-the-secret', permanent: true },
      { source: '/mentalhealth', destination: '/mental-health', permanent: true },
      { source: '/f260nt', destination: '/follow-the-nt260-bible-reading-plan', permanent: true },
      { source: '/budget', destination: '/the-2023-ministry-plan', permanent: true },
      { source: '/card', destination: 'https://longhollow.wufoo.com/forms/wios9x40o6ivto/', permanent: true },
      { source: '/baptismclass', destination: '/kids-baptism-classes', permanent: true },
      { source: '/story', destination: '/', permanent: true },
      { source: '/stories', destination: '/', permanent: true },
      { source: '/specialneeds', destination: '/special-needs', permanent: true },
      { source: '/24', destination: 'https://prayerteam.longhollow.com', permanent: true },
      { source: '/prayer', destination: '/prayer-team-and-prayer-requests', permanent: true },
      { source: '/neverthesame', destination: '/robby-gallatys-testimony', permanent: true },
      { source: '/god', destination: '/how-good-is-good-enough-to-get-into-heaven', permanent: true },
      { source: '/churchplanting', destination: '/church-planting', permanent: true },
      { source: '/local', destination: '/search?category=Service%20Opportunities&p=1', permanent: true },
      { source: '/baptism', destination: '/next-steps/baptism', permanent: true },
      { source: '/pray', destination: '/prayer-team-and-prayer-requests', permanent: true },
      { source: '/gifts', destination: 'https://my.longhollow.com/page/694', permanent: true },
      { source: '/podcast', destination: '/watch', permanent: true },
      { source: '/students', destination: '/connect/students', permanent: true },
      { source: '/preschool', destination: '/connect/kids', permanent: true },
      { source: '/member', destination: '/next-steps/become-a-member', permanent: true },
      { source: '/membership', destination: '/next-steps/become-a-member', permanent: true },
      { source: '/volunteer', destination: '/next-steps/volunteer', permanent: true },
      { source: '/trips', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/go', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/serve', destination: '/next-steps/volunteer', permanent: true },
      { source: '/grow', destination: '/next-steps/find-a-life-group', permanent: true },
      // { source: '/replicateapp', destination: 'TBD - App Page', permanent: true },
      { source: '/hendersonville-groups', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/vision', destination: '/the-2023-ministry-plan', permanent: true },
      { source: '/lhkidsmissions', destination: '/connect/kids', permanent: true },
      { source: '/guides', destination: '/download-life-group-curriculum', permanent: true },
      { source: '/curriculum', destination: '/download-life-group-curriculum', permanent: true },
      { source: '/growingup', destination: '/', permanent: true },
      { source: '/interns', destination: '/long-hollow-internships', permanent: true },
      { source: '/internship', destination: '/long-hollow-internships', permanent: true },
      { source: '/internships', destination: '/long-hollow-internships', permanent: true },
      { source: '/groupfinder', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/connect', destination: '/next-steps/become-a-member', permanent: true },
      { source: '/relief', destination: '/join-disaster-relief-efforts-to-help-our-community', permanent: true },
      { source: '/adoption', destination: '/adoption-and-foster-care', permanent: true },
      { source: '/pathway', destination: '/about/our-mission-and-strategy', permanent: true },
      { source: '/dgroups', destination: '/next-steps/start-a-discipleship-group', permanent: true },
      { source: '/summerpreaching', destination: '/watch/71ec2079298288ea22cabf29ff907d73/summer-preaching-series', permanent: true },
      { source: '/staff', destination: '/search?category=Staff&p=1', permanent: true },
      { source: '/lifegroups', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/robbylive', destination: '/watch', permanent: true },
      { source: '/theword', destination: '/watch/71ec2079298288ea22cabf29ff907d73/in-the-beginning-the-word', permanent: true },
      { source: '/replicate', destination: 'https://replicate.org/', permanent: true },
      { source: '/bylaws', destination: '/about/beliefs', permanent: true },
      { source: '/divorcecare', destination: '/divorce-care', permanent: true },
      { source: '/offering', destination: '/be-a-part-of-this-years-fall-offering', permanent: true },
      { source: '/ministryplan', destination: '/the-2023-ministry-plan', permanent: true },
      { source: '/griefshare', destination: '/grief-share', permanent: true },
      { source: '/food', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/foodpantry', destination: '/connect/connect-with-us', permanent: true },
      { source: '/baby', destination: '/connect/kids', permanent: true },
      { source: '/seniors', destination: '/', permanent: true },
      { source: '/easter', destination: '/come-celebrate-with-us-this-easter', permanent: true },
      { source: '/lhkids', destination: '/connect/kids', permanent: true },
      { source: '/christmas', destination: '/celebrate-christmas-at-long-hollow', permanent: true },
      { source: '/schedule', destination: '/about/schedule', permanent: true },
      { source: '/contact_us', destination: '/connect/connect-with-us', permanent: true },
      { source: '/im_new', destination: '/next-steps/plan-your-visit', permanent: true },
      { source: '/mobile', destination: '/', permanent: true },
      { source: '/jesus', destination: '/about/who-is-jesus', permanent: true },
      { source: '/gospel', destination: '/about/who-is-jesus', permanent: true },
      { source: '/discover', destination: '/discover-your-calling', permanent: true },
      { source: '/the-good-news', destination: '/about/who-is-jesus', permanent: true },
      { source: '/what-we-believe', destination: '/about/beliefs', permanent: true },
      { source: '/should-i-be-baptized', destination: '/next-steps/baptism', permanent: true },
      { source: '/who-is-long-hollow', destination: '/about/our-mission-and-strategy', permanent: true },
      { source: '/first-visit', destination: '/next-steps/plan-your-visit', permanent: true },
      { source: '/times-and-locations', destination: '/about/schedule', permanent: true },
      { source: '/meet-our-staff', destination: '/search?category=Staff&p=1', permanent: true },
      { source: '/our-mission-and-core-values', destination: '/about/our-mission-and-strategy', permanent: true },
      { source: '/the-discipleship-pathway', destination: '/about/our-mission-and-strategy', permanent: true },
      { source: '/know-god', destination: '/about/schedule', permanent: true },
      { source: '/find-community', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/make-disciples-pathway', destination: '/next-steps/start-a-discipleship-group', permanent: true },
      { source: '/make-disciples-pathway', destination: '/next-steps/start-a-discipleship-group', permanent: true },
      { source: '/change-the-world', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/meet-pastor-robby', destination: '/about/meet-pastor-robby', permanent: true },
      { source: '/become-a-member', destination: '/next-steps/become-a-member', permanent: true },
      { source: '/volunteer-at-long-hollow', destination: '/next-steps/volunteer', permanent: true },
      { source: '/mission-trips', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/local-opportunities', destination: '/next-steps/get-involved-with-missions', permanent: true },
      { source: '/children', destination: '/connect/kids', permanent: true },
      { source: '/middleschool', destination: '/connect/students', permanent: true },
      { source: '/highschool', destination: '/connect/students', permanent: true },
      { source: '/men', destination: '/next-steps/find-a-life-group', permanent: true },
      { source: '/institute', destination: '/', permanent: true },
      { source: '/women', destination: '/connect/women', permanent: true },
      { source: '/mental-health-support-groups', destination: '/mental-health', permanent: true },
      { source: '/contact', destination: '/connect/connect-with-us', permanent: true },
      { source: '/update-your-info', destination: 'https://my.longhollow.com/MyAccount', permanent: true },
      { source: '/give', destination: '/online-giving', permanent: true },
      { source: '/bank-draft', destination: '/online-giving', permanent: true },
      { source: '/give-in-person', destination: '/online-giving', permanent: true },
      { source: '/give-with-a-text-message', destination: '/online-giving', permanent: true },
      { source: '/other-gifts', destination: '/online-giving', permanent: true },
      { source: '/messages', destination: '/watch', permanent: true },
      { source: '/wednesday-messages', destination: '/watch', permanent: true },
      { source: '/message-archives', destination: '/watch', permanent: true },
      { source: '/student-media', destination: '/watch', permanent: true },
      { source: '/baptism-videos', destination: '/baptisms', permanent: true },
      { source: '/times-and-locations', destination: '/about/schedule', permanent: true },
      { source: '/hendersonville', destination: '/', permanent: true },
      { source: '/gallatin', destination: '/about-the-closing-of-our-gallatin-campus', permanent: true },
      { source: '/events/lh-kids-baptism-classes', destination: '/kids-baptism-classes', permanent: true },
      { source: '/events/supporting-those-who-struggle-event', destination: '/supporting-those-who-struggle-event', permanent: true },
      { source: '/events/light-up-the-pike', destination: 'https://lightupthepike.com', permanent: true },
      { source: '/groupserve', destination: 'https://my.longhollow.com/groupserve', permanent: true },
      { source: '/notes', destination: 'http://bible.com/events/49028015', permanent: true }
    ];
  },
};
