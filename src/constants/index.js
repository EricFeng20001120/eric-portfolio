import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    Eaton_Corporation,
    Canadian_Tire,
    Hatchery,
    carrent,
    jobit,
    tripguide,
    threejs,
    Python,
    Java,
    sql,
    azure,
    aws,
    c_plus_plus,
    blender,
    embedding,
    salesbot,
    aiScraper,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "3D Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "c_plus_plus",
      icon: c_plus_plus,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "azure",
      icon: azure,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "blender",
      icon: blender,
    },
  ];
  
  const experiences = [
    {
      title: "Co-Founder & Data Developer & 3D Modeler",
      company_name: "Red Coral at University of Toronto Hatchery",
      icon: Hatchery,
      iconBg: "#383E56",
      date: "April 2019 - Sept 2019",
      points: [
        "Introduced and built an external CPU mist-cooling solution, bridging the gap between consumer-grade liquid coolers and enterprise-level systems.",
        "Designed and refined 3D models using CAD software, highlighting thermal design concepts and functional components.",
        "Produced a 3D-rendered promotional video to showcase product features to investors and users.",
        "Surveyed and analyzed 500+ user surveys (Python, SQL), identifying 80% purchase intent among high-end gamers; Segmented users into 4 clusters (k-means) to tailor product tiers.",
        "Strategized product scaling via online ads (Google, YouTube) and e-commerce channels (Amazon, Taobao)",
        "Presented the cooling product in Demo Day, resulting in being one of the 14 successful teams out of 40 competing teams and receiving an invitation from World’s Top 8 Incubator - Gener8or.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Eaton Corporation",
      icon: Eaton_Corporation,
      iconBg: "#383E56",
      date: "May 2021 - Aug 2022",
      points: [
        "Designed and led the development of a predictive maintenance web application to analyze Maintenance, Repair, and Overhaul (MRO) data and predict the Remaining Useful Life (RUL) of aerospace components.",
        "Implemented real-time data processing pipelines to ingest and preprocess sensor data from Azure IoT EventHub and MRO records stored in a SQL database.",
        "Automated data pipelines using Apache Kafka, Apache Spark, and Airflow, enable real-time data monitoring and data cleaning for ML applications.",
        "Developed APIs for data retrieval and communication between the Flask-based backend and Dash/React frontend.",
        "Designed and developed an LSTM-based predictive model, achieving a 5-10% difference in RMSE flight hours compared to actual RUL, enhancing maintenance scheduling and reducing unexpected failures.",
        "Deployed the application using Docker and Azure Web Services, integrating it into a scalable, cloud-based architecture for continuous monitoring and inference.",
        "Reduce unscheduled maintenance by 10%, accelerated retrieval time for MRO data from days to seconds",
      ],
    },
    {
      title: "Data Developer",
      company_name: "Canadian Tire",
      icon: Canadian_Tire,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - April 2023",
      points: [
        "Integrated product, store, and customer data into embedding pipelines to improve demand forecasting, product recommendations, and search relevance.",
        "Collaborated with cross-functional teams to implement embedding solutions, helping optimize store layouts, marketing strategies, and chatbot functionality.",
        "Developed advanced product embeddings (Pre-Trained NLP, TF-IDF, Prod2Vec) to cluster and categorize similar products, boosting classification accuracy by over 3%.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Canadian Tire Product and Store Embeddings",
      description:
        "Developed product and store embeddings for categorization using product, store, and customer data; Conducted research on pre-trained embeddings and customized deep learning solutions, resulting in a 4% increase in multi-class classification accuracy compared to the baseline model",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Huggingface",
          color: "green-text-gradient",
        },
      ],
      image: embedding,
      source_code_link: "https://github.com/EricFeng20001120/Product_Embedding_CanadianTire",
    },
    {
      name: "LLM Sales-Bot with RAG",
      description:
        "Fine-tuned the GPT-3.5 turbo model using conversational data and prompt engineering; established a RAG pipeline with LangChain for tasks like user prompt refinement and SQL query generation, resulting in a 90% goal completion rate with 100 users.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HuggingFace",
          color: "green-text-gradient",
        },
        {
          name: "Langchain",
          color: "pink-text-gradient",
        },
        {
          name: "Gradio",
          color: "yellow-text-gradient",
        },
      ],
      image: salesbot,
      source_code_link: "https://github.com/EricFeng20001120/GPT3_5FinetunedSalesChatBot",
    },
    {
      name: "AI Web Scrapper",
      description:
        "AI-powered web scraping system dynamically extracts and structures website data using natural language prompts, automates workflows via Airflow, stores results in PostgreSQL, and deploys as a scalable Dockerized application for flexible, enterprise-ready data pipelines.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "Langchain",
          color: "pink-text-gradient",
        },
        {
          name: "Airflow",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: aiScraper,
      source_code_link: "https://github.com/EricFeng20001120/AI-web-scrapper",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };