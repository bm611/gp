export const RESUME_DATA = {
  name: "Gayathri",
  title: "Data Engineer / DWH Developer / ML Engineer",
  location: "The Hague, Netherlands",
  contact: {
    email: "talendgayathri@gmail.com",
    phone: "+31-(0) 633287671",
    linkedin: "https://www.linkedin.com/in/gayathri-pachaiyappan-75978195/",
    skype: "talendgayathri@gmail.com"
  },
  summary: "8+ years of professional experience in Data Engineering, Data Warehousing, Business Intelligence, Data Analytics, and AI Engineering. Strong background in designing, developing, and deploying scalable data pipelines and AI solutions using Python, AWS, Azure, Snowflake, and Dagster. Proven track record in migrating on-premise systems to cloud platforms and leading technical teams.",
  skills: {
    languages: ["Python", "PySpark", "SQL", "Shell Script", "Java", "C#"],
    cloud: ["AWS (Bedrock, Redshift, Glue, Lambda, EC2, S3, RDS, DynamoDB, SageMaker)", "Azure (Data Factory, Data Lake, Databricks, Synapse)", "Snowflake"],
    dataEngineering: ["Apache Airflow", "Dagster", "DBT", "SSIS", "Talend", "Kafka", "Spark SQL"],
    databases: ["Snowflake", "AWS Redshift", "MS SQL Server", "MySQL", "AWS Neptune (Graph DB)", "Neo4j"],
    devOps: ["Docker", "Kubernetes", "CI/CD (GitHub Actions, Azure DevOps)", "Terraform/CDK", "CloudFormation"],
    visualization: ["Power BI", "SSRS", "SSAS"]
  },
  experience: [
    {
      company: "Kraft Heinz Holding B.V",
      location: "Netherlands",
      role: "Data/AI Engineer",
      period: "May 2023 - Present",
      description: "Leading development of data and AI pipelines leveraging Python, Snowflake, DBT, Azure, and AWS Services.",
      achievements: [
        "Developed prompts for extracting structured data from PDFs to Snowflake using AWS Textract and Bedrock.",
        "Built LLM pipelines using Python, SQL, and AWS stack (Lambda, Bedrock, Step Functions).",
        "Designed Graph DB models in AWS Neptune for ML link prediction algorithms using Gremlin queries.",
        "Created CI/CD pipelines for deploying Docker images to AWS ECR using CDK and GitHub Actions.",
        "Migrated large datasets to Databricks (PySpark) from ADLS Gen2 using ADF pipelines.",
        "Implemented Snowflake streams, tasks, and Cortex search services for bot applications."
      ]
    },
    {
      company: "HCL Technologies B.V",
      client: "Aegon Insurance",
      location: "Den Haag, Netherlands",
      role: "Data Engineer",
      period: "May 2019 - May 2023",
      description: "Worked on migrating on-premise Data Vault to AWS Cloud and developing analytical solutions.",
      achievements: [
        "Migrated on-premise Data Warehouse to AWS Redshift, S3, and Glue.",
        "Developed Spark SQL and PySpark code for data ingestion and enrichment.",
        "Orchestrated jobs using Apache Airflow and managed Glue triggers.",
        "Built CI/CD pipelines for deploying AWS CDK stacks using Azure DevOps.",
        "Designed dimensional data models and handled Slowly Changing Dimensions (SCD).",
        "Lead offshore team of 5 people and provided technical training."
      ]
    },
    {
      company: "Intellect Design Arena Ltd",
      client: "SJP (Cirencester, UK)",
      location: "Chennai, India",
      role: "DWH & MDM Developer",
      period: "Jan 2016 - April 2019",
      description: "Focused on Data Warehouse development, MDM processes, and SQL optimization.",
      achievements: [
        "Developed SQL stored procedures and SSIS packages for ETL processes.",
        "Implemented Change Data Capture (CDC) in Talend for data warehouse loading.",
        "Created Star and Snowflake schemas for dimensional modeling.",
        "Optimized query performance for fund level calculations using C# CLR.",
        "Managed Master Data Management (MDM) records and loading to Snowflake."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (Computer Science)",
      institution: "Anna University Tiruvannamalai",
      year: "2011 - 2015"
    }
  ],
  certifications: [
    "AWS Solution Architect – Associate",
    "Microsoft Azure Fundamentals (AZ-900)",
    "AWS AI Practitioner",
    "Talend Data Integration Training"
  ]
};