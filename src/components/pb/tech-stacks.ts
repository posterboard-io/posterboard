import { RolesAndGrowthProps, TechStackProps, PageSize } from '~/types/types'

export type TechStack = 
    'Python' | 'JavaScript' | 'C' | 'C++' | 'Rust' | 'Go' | 'Java' | 'C#' |
    'TypeScript' | 'Ruby' | 'PHP' | 'Swift' | 'Kotlin' | 'Scala' | 
    'Lua' | 'Haskell' | 'Elixir' | 'Erlang' | 'Clojure' | 'R' | 'Objective-C' |
    'HTML' | 'CSS' | 'Sass' | 'Less' |
    'Node.js' | 'React' | 'Vue.js' | 'Angular' | 'Ember.js' | 'Svelte' | 
    'Django' | 'Flask' | 'Ruby on Rails' | 'Spring Boot' | '.NET Core' | 
    'Express.js' | 'NestJS' | 'Laravel' | 'Phoenix' | 'FastAPI' | 'ASP.NET' |
    'PostgreSQL' | 'MySQL' | 'MongoDB' | 'Cassandra' | 'Redis' | 
    'Oracle' | 'SQLite' | 'MariaDB' | 'DynamoDB' | 'CouchDB' | 'Neo4j' |
    'GraphQL' | 'gRPC' | 'REST' | 'WebSockets' | 'Apollo' |
    'AWS' | 'Azure' | 'Google Cloud' | 'Vercel' |
    'Docker' | 'Kubernetes' | 'Rancher' | 'OpenShift' | 'Docker Compose' | 'Helm' |
    'Jenkins' | 'CircleCI' | 'Travis CI' | 'GitHub Actions' | 'GitLab CI' | 'Bitbucket Pipelines' |
    'Webpack' | 'Rollup' | 'Parcel' | 'Babel' | 'ESLint' | 'Prettier' | 'TSLint' |
    'Nginx' | 'Apache' | 'Caddy' | 'HAProxy' | 
    'Git' | 'Mercurial' | 'SVN' | 'Fossil' |
    'TensorFlow' | 'PyTorch' | 'Keras' | 'Scikit-learn' | 'XGBoost' | 'Pandas' | 'NumPy' | 'Jupyter' |
    'Elasticsearch' | 'Kafka' | 'RabbitMQ' | 'ZooKeeper' | 'Logstash' |
    'Puppet' | 'Ansible' | 'Chef' | 'SaltStack' | 'TerraGrunt' |
    'Terraform' | 'Packer' | 'Vagrant' | 'Consul' |
    'Unity' | 'Unreal Engine' | 'Godot' | 'CryEngine' |
    'Figma' | 'Sketch' | 'Adobe XD' | 'InVision' | 'Balsamiq' |
    'Jira' | 'Trello' | 'Asana' | 'Basecamp' | 'Notion' | 'Airtable' |
    'Slack' | 'Microsoft Teams' | 'Discord' | 'Zoom' | 'Webex' |
    'VS Code' | 'IntelliJ IDEA' | 'Eclipse' | 'Sublime Text' | 'Atom' | 'PyCharm' | 'WebStorm' |
    'Charles Proxy' | 'Wireshark' | 'Postman' | 'Insomnia' | 'Fiddler' |
    'Ghidra' | 'OllyDbg' | 'IDA Pro' | 'Radare2' |
    'VirtualBox' | 'VMware' | 'Hyper-V' | 'Parallels Desktop' |
    'Linux' | 'Windows' | 'macOS' | 'FreeBSD' | 'Debian' | 'Ubuntu' | 'CentOS' | 'Red Hat' | 'Fedora' | 'Arch Linux' | 'Manjaro' |
    'Nmap' | 'Metasploit' | 'Burp Suite' | 'OWASP Zap' | 'Aircrack-ng' |
    'Sentry' | 'Loggly' | 'New Relic' | 'Datadog' | 'Splunk' |
    'Stripe' | 'PayPal' | 'Braintree' | 'Square' | 'Razorpay' |
    'OAuth' | 'JWT' | 'OpenID Connect' | 'SAML' | 'Kerberos' |
    'Next.js' | 'Gatsby' | 'Gridsome' | 'Nuxt.js' | 'Strapi' |
    'Wordpress' | 'Drupal' | 'Joomla' | 'Magento' | 'Shopify' |
    'Mocha' | 'Jest' | 'Cypress' | 'Jasmine' | 'Protractor' | 'Sinon' | 'TestCafe' |
    'Chai' | 'Enzyme' | 'React Testing Library' | 'PHPUnit' | 'RSpec' |
    'Flutter' | 'React Native' | 'Ionic' | 'Cordova' | 'Xamarin' |
    'NGINX' | 'Apache' | 'IIS' | 'Tomcat' | 'Jetty' |
    'MQTT' | 'AMQP' | 'STOMP' | 'ZeroMQ' |
    'Prometheus' | 'Grafana' | 'ELK Stack' | 'Graylog' | 'Kibana' | 
    'OpenCV' | 'ImageMagick' | 'FFmpeg' |
    'Blockchain' | 'Ethereum' | 'Solidity' | 'Hyperledger' |
    'WebAssembly' | 'WASM' | 'AssemblyScript' |
    'iOS' | 'Android' | 'Windows Mobile' | 'Blackberry OS' |
    'PowerBI' | 'Tableau' | 'Looker' | 'D3.js' | 'Highcharts' |
    'Firebase' | 'Realm' | 'Parse' |
    'Twilio' | 'SendGrid' | 'Mailchimp' |
    'OAuth 2.0' | 'LDAP' | 'Active Directory' |
    'WebRTC' | 'Socket.io' | 'Pusher' |
    'RxJS' | 'Lodash' | 'Moment.js' | 'Day.js' | 'Immutable.js' |
    'VR' | 'AR' | 'Unity ARKit' | 'ARCore' |
    'WebGL' | 'Three.js' | 'Babylon.js' |
    'Snowflake' | 'BigQuery' | 'Redshift' |
    'Hadoop' | 'Spark' | 'Hive' | 'Pig' |
    'Zabbix' | 'Nagios' | 'Icinga' |
    'Algolia' | 'Elastic App Search' | 'Amazon Elasticsearch' |
    'Vulkan' | 'DirectX' | 'Metal' |
    'Flink' | 'Beam' | 'NiFi' | 
    'Yarn' | 'NPM' | 'Pip' | 'Composer' | 'Maven' | 'Gradle' |
    'Markdown' | 'LaTeX' | 'AsciiDoc' | 
    'Mattermost' | 'Rocket.Chat' |
    'Vim' | 'Nano' | 'Emacs' |
    'PWA' | 'AMP' | 'Service Workers' |
    'Raspberry Pi' | 'Arduino' | 'ESP32' | 'MicroPython' |
    'Serverless' | 'AWS Lambda' | 'Azure Functions' | 'Google Cloud Functions' |
    'Vault' | 'CyberArk' | 'LastPass' |
    'IPFS' | 'Filecoin' | 'Storj' |
    'GIMP' | 'Blender' | 'Inkscape' |
    'Virtual Reality' | 'Augmented Reality' | 'Mixed Reality' | 
    'Zeplin' | 'Storybook' | 'Framer' | 'Miro' | 
    'Akamai' | 'Cloudflare' | 'Fastly' |
    'CDN' | 'WAF' | 'DDoS Protection' |
    'Caffe' | 'Darknet' | 'YOLO' |
    'GraphQL Yoga' | 'Prisma' | 'Hasura' |
    'Auth0' | 'Okta' | 'Keycloak' | 
    'Webhooks' | 'Zapier' | 'IFTTT' |
    'SPAs' | 'MPAs' | 'SSR' | 'CSR' | 'Static Site Generators' |
    'Edge Computing' | 'Quantum Computing' | 'Neural Networks' |
    'Augmented Analytics' | 'Big Data' | 'IoT' | 
    'Selenium' | 'WebDriver' | 'Appium' |
    'RPA' | 'Blue Prism' | 'UiPath' | 'Automation Anywhere' |
    'Low Code Platforms' | 'NoSQL' | 'RDBMS' | 'Graph Databases' | 'Time Series Databases' |
    'Agile' | 'Scrum' | 'Kanban' | 'Waterfall' | 'Lean' | 
    'TDD' | 'BDD' | 'DDD' | 'FDD' |
    'OOP' | 'Functional Programming' | 'Procedural Programming' | 
    'Frontend' | 'Backend' | 'Full Stack' | 'DevOps' | 'ML/AI' | 
    'Blockchain Development' | 'Game Development' | 'Embedded Systems' | 
    'UX Design' | 'UI Design' | 'Interaction Design' | 
    'Responsive Web Design' | 'Mobile First Design' | 'Atomic Design' | 
    'Microservices' | 'Monolithic Architecture' | 'Serverless Architecture'

export const techStacks: TechStack[] = [
    'Python' , 'JavaScript' , 'C' , 'C++' , 'Rust' , 'Go' , 'Java' , 'C#' ,
    'TypeScript' , 'Ruby' , 'PHP' , 'Swift' , 'Kotlin' , 'Scala' , 
    'Lua' , 'Haskell' , 'Elixir' , 'R' , 
    'HTML' , 'CSS' , 'Node.js' , 'React' , 'Vue.js' , 'Angular' , 'Svelte' , 
    'Django' , 'Spring Boot' , 'Laravel' , 'Phoenix' , 'FastAPI' , 'ASP.NET' ,
    'PostgreSQL' , 'MySQL' , 'MongoDB' , 'Cassandra' , 'Redis' , 
    'Oracle' , 'MariaDB' , 
    'AWS' , 'Azure' , 'Google Cloud' ,
]

export type RoleType = "Software Engineer" | "Full Stack Engineer" | "Frontend Engineer" | "Backend Engineer" | "DevOps Engineer" | "Data Engineer" | "Data Scientist" | "Machine Learning Engineer" | "Product Manager" | "QA Engineer" | "Security Engineer" | "Other"
export type CurrentLevelType = "Senior" | "Mid" | "Junior" | "Intern" | "Entry" | "Staff" | "Lead" | "Manager" | "Director" | "VP" | "C-Level" | "Founder" | "Other"
export type CompanySizeType = "Big" | "Medium" | "Small" | "Startup"
export type CitySizeType = "Phoenix, AZ" | "San Francisco, CA" | "New York, NY" | "Los Angeles, CA" | "Chicago, IL" | "Houston, TX" | "Miami, FL" | "Seattle, WA" | "Dallas, TX" | "Boston, MA" | "Philadelphia, PA" | "San Diego, CA" | "Denver, CO" | "Atlanta, GA" | "Nashville, TN" | "Minneapolis, MN" | "San Antonio, TX" | "Orlando, FL" | "Austin, TX" | "Detroit, MI" | "Portland, OR" | "Las Vegas, NV" | "Baltimore, MD" | "Cleveland, OH" | "Sacramento, CA" | "Remote"
export type IndustryType = "Finance" | "Fintech" | "Crypto/Blockchain" | "Solar/Energy" | "AI/Machine Learning" | "IoT" | "eCommerce" |  "Cloud Computing" | "Augmented Reality/Virtual Reality" | "Cybersecurity" | "Healthcare" | "Education" | "Government" | "Retail" | "Manufacturing" | "Transportation" | "Technology" | "Gaming" | "Telecommunications" | "Other";



export const pageSizeOptions: PageSize[] = [
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
]

export const currentLevels: RolesAndGrowthProps[] = [
    { value: "Intern", label: "Intern" },
    { value: "Entry", label: "Entry" },
    { value: "Mid", label: "Mid" },
    { value: "Senior", label: "Senior" },    
    { value: "Principal", label: "Principal" },
    { value: "Manager", label: "Manager" },    
    { value: "Executive", label: "Executive" },
    { value: "Any", label: "Any" }
]


export const citySizes: RolesAndGrowthProps[] = [
    { value: "Phoenix, AZ", label: "Phoenix, AZ" },
    { value: "San Francisco, CA", label: "San Francisco, CA" },
    { value: "New York, NY", label: "New York, NY" },
    { value: "Los Angeles, CA", label: "Los Angeles, CA" },
    { value: "Chicago, IL", label: "Chicago, IL" },
    { value: "Houston, TX", label: "Houston, TX" },
    { value: "Miami, FL", label: "Miami, FL" },
    { value: "Seattle, WA", label: "Seattle, WA" },
    { value: "Dallas, TX", label: "Dallas, TX" },
    { value: "Boston, MA", label: "Boston, MA" },
    { value: "Philadelphia, PA", label: "Philadelphia, PA" },
    { value: "San Diego, CA", label: "San Diego, CA" },
    { value: "Denver, CO", label: "Denver, CO" },
    { value: "Atlanta, GA", label: "Atlanta, GA" },
    { value: "Nashville, TN", label: "Nashville, TN" },
    { value: "Minneapolis, MN", label: "Minneapolis, MN" },
    { value: "San Antonio, TX", label: "San Antonio, TX" },
    { value: "Orlando, FL", label: "Orlando, FL" },
    { value: "Austin, TX", label: "Austin, TX" },
    { value: "Detroit, MI", label: "Detroit, MI" },
    { value: "Portland, OR", label: "Portland, OR" },
    { value: "Las Vegas, NV", label: "Las Vegas, NV" },
    { value: "Baltimore, MD", label: "Baltimore, MD" },
    { value: "Cleveland, OH", label: "Cleveland, OH" },
    { value: "Sacramento, CA", label: "Sacramento, CA" },
    { value: "Remote", label: "Remote" },
    { value: "Any", label: "Any" },    
]

export const roles: RolesAndGrowthProps[] = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Full Stack Engineer", label: "Full Stack Engineer" },
    { value: "Frontend Engineer", label: "Frontend Engineer" },
    { value: "Backend Engineer", label: "Backend Engineer" },
    { value: "DevOps Engineer", label: "DevOps Engineer" },
    { value: "Data Engineer", label: "Data Engineer" },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Machine Learning Engineer", label: "Machine Learning Engineer" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "QA Engineer", label: "QA Engineer" },
    { value: "Security Engineer", label: "Security Engineer" },
    { value: "Any", label: "Any" }
]

export const companySizes: RolesAndGrowthProps[] = [
    { value: "Large", label: "Large" },
    { value: "Medium", label: "Medium" },
    { value: "Small", label: "Small" },
    { value: "Startup", label: "Startup" },
    { value: "Any", label: "Any" }
]

export const compensationRanges: RolesAndGrowthProps[] = [
    { value: "< $100,000", label: "< $100,000" },
    { value: "$100,000+", label: "$100,000+" },
    { value: "$200,000+", label: "$200,000+" },
    { value: "$300,000+", label: "$300,000+" },
    { value: "$400,000+", label: "$400,000+" },
    { value: "$500,000+", label: "$500,000+" },
    { value: "Any", label: "Any" }
]

export const industryTypes: RolesAndGrowthProps[] = [
    { value: "FAANG+", label: "FAANG+" },
    { value: "Finance", label: "Finance" },
    { value: "Crypto/Blockchain", label: "Crypto/Blockchain" },
    { value: "Solar/Energy", label: "Solar/Energy" },
    { value: "AI/ML", label: "AI/ML" },
    { value: "IoT", label: "IoT" },
    { value: "eCommerce", label: "eCommerce" },
    { value: "SaaS", label: "SaaS" },
    { value: "Cloud Services", label: "Cloud Services" },
    { value: "AR/VR", label: "AR/VR" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Retail", label: "Retail" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Transportation", label: "Transportation" },
    { value: "Gaming", label: "Gaming" },
    { value: "Any", label: "Any" }
]

export const techStacksOptions: TechStackProps[] = [
    { value: "Python", label: "Python" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "Rust", label: "Rust" },
    { value: "Go", label: "Go" },
    { value: "Java", label: "Java" },
    { value: "C#", label: "C#" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Ruby", label: "Ruby" },
    { value: "PHP", label: "PHP" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Scala", label: "Scala" },
    { value: "Lua", label: "Lua" },
    { value: "AWS", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "Google Cloud", label: "Google Cloud" },    
]