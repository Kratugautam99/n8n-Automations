# 🎱 n8n Automations 

![n8n Automations Logo](Demonstrative_Images/0/Logo.png)

<p align="center"> <a href="#-introduction"><img src="https://img.shields.io/badge/Introduction-📘-blue?style=for-the-badge"></a> <a href="#-table-of-contents"><img src="https://img.shields.io/badge/Table%20of%20Contents-📑-green?style=for-the-badge"></a> <a href="#%EF%B8%8F-technical-stack"><img src="https://img.shields.io/badge/Tech%20Stack-⚙️-orange?style=for-the-badge"></a> <a href="#-repository-structure"><img src="https://img.shields.io/badge/Structure-🏗️-purple?style=for-the-badge"></a> <a href="#-automations-showcase"><img src="https://img.shields.io/badge/Automations-🚀-red?style=for-the-badge"></a> <a href="#-setup--deployment"><img src="https://img.shields.io/badge/Setup-🐳-blue?style=for-the-badge"></a> </p>

---

## 📙 Introduction

Welcome to the **n8n Automations Repository** – a curated collection of production-ready automation workflows built with **[n8n](https://n8n.io/)**. From personal productivity to enterprise‑grade CI/CD and AI‑powered content generation, these workflows demonstrate the power of low‑code automation.

Each folder contains a complete workflow (`.json`) ready to be imported into your n8n instance, along with supplementary files (JavaScript functions, test repositories, etc.) where needed. The repository also includes extensive screenshots to help you visualize the architecture and outputs.

Whether you want to manage your life via Telegram, automate lead qualification, deploy self‑healing pipelines, or generate multimedia content, you'll find a workflow here to kickstart your automation journey.

---

## 📑 Table of Contents

- [🎱 n8n Automations Repository](#-n8n-automations-repository)
  - [📙 Introduction](#-introduction)
  - [📑 Table of Contents](#-table-of-contents)
  - [⚙️ Technical Stack](#️-technical-stack)
  - [🏗️ Repository Structure](#️-repository-structure)
  - [🚀 Automations Showcase](#-automations-showcase)
    - [1️⃣ Life Manager Telegram Bot](#1️⃣-life-manager-telegram-bot)
    - [2️⃣ Self‑Healing CI/CD Pipeline](#2️⃣-selfhealing-cicd-pipeline)
    - [3️⃣ Email Classification \& Auto‑Response Drafting](#3️⃣-email-classification--auto-response-drafting)
    - [4️⃣ B2B Lead Generation \& Qualification](#4️⃣-b2b-lead-generation--qualification)
    - [5️⃣ SSL Certificates \& Alerts](#5️⃣-ssl-certificates--alerts)
    - [6️⃣ Ultimate Multi‑Media Agent Army](#6️⃣-ultimate-multimedia-agent-army)
    - [7️⃣ Comprehensive SEO Strategy Team](#7️⃣-comprehensive-seo-strategy-team)
    - [8️⃣ AI Video Twitter/X Spam](#8️⃣-ai-video-twitterx-spam)
    - [9️⃣ Local System RAG with RDBMS](#9️⃣-local-system-rag-with-rdbms)
    - [🔟 Client Feedback Form Airtable Analysis](#🔟-client-feedback-form-airtable-analysis)
  - [🐳 Setup \& Deployment](#-setup--deployment)
    - [Running n8n with Docker (Persistent Volumes)](#running-n8n-with-docker-persistent-volumes)
    - [Importing Workflows](#importing-workflows)
  - [📜 License](#-license)

---

## ⚙️ Technical Stack

The automations integrate with a wide range of services and tools:

| **Category** | **Technologies** |
|--------------|-------------------|
| **Automation Engine** | n8n (workflow orchestrator) |
| **Communication** | Telegram Bot, Slack, Discord, Gmail, Outlook, X (Twitter), TikTok, Instagram |
| **Productivity** | Google Calendar, Google Sheets, Google Docs, Notion, Airtable, JotForm |
| **Development** | GitHub, CI/CD pipelines, self‑healing triggers |
| **AI/ML** | OpenAI (GPT, DALL‑E), AI image/video generation, RAG (Retrieval‑Augmented Generation) |
| **Infrastructure** | SSL certificate checking, local system RDBMS (PostgreSQL/MySQL) |
| **Additional** | HTTP requests, Webhooks, JavaScript functions, File operations |

---

## 🏗️ Repository Structure

```plaintext
n8n-Automations/
|
|  // Workflow Folders
├── 1_Life_Manager_Telegram_Bot/
│   └── Life_Manager_Telegram_Bot.json
|
├── 2_Self_Healing_CI_CD_Pipeline/
│   ├── Self_Healing_CI_CD_Pipeline.json
│   └── TestGithubRepo/               # Tested Upon Repo (no .git folder)
│       └── (Files of Test Repo)
|
├── 3_Email_Classification_and_Auto_Response_Drafting/
│   └── Email_Classification_and_Auto_Response_Drafting.json
|
├── 4_B2B_Lead_Generation_and_Qualification/
│   └── 4_B2B_Lead_Generation_and_Qualification.json
|
├── 5_SSL_Certificates_and_Alerts/
│   ├── SSL_Certificates_and_Alerts.json
│   └── SSL-Health-Assessment.js       # JavaScript Function File
|
├── 6_Ultimate_Multi_Media_Agent_Army/
│   ├── Ultimate_Multi_Media_Agent_Army.json
│   ├── Create_Doc_Tool.json
│   ├── Create_Image_Tool.json
│   ├── Edit_Image_Tool.json
│   ├── Create_Video_Tool.json
│   ├── Image_to_Video_Tool.json
│   ├── Instagram_Post.json
│   ├── X_Post.json
│   └── Tiktok_Post.json
|
├── 7_Comprehensive_SEO_Strategy_Team/
│   └── Comprehensive_SEO_Strategy_Team.json
|
├── 8_AI_Video_Twitter_X_Spam/
│   └── AI_Video_Twitter_X_Spam.json
|
├── 9_Local_System_RAG_with_RDBMS/
│   └── Local_System_RAG_with_RDBMS.json
|
├── 10_Client_Feedback_Form_Airtable_Analysis/
|    └── Client_Feedback_Form_Airtable_Analysis.json
|
├── Demonstrative_Images/               # Applied Automations Images
│   ├── 0/
│   │   └── Logo.png                    # Banner Image
│   ├── 1/                              # Life Manager Images
│   │   ├── Google_Calendar_Task.png
│   │   ├── Main_Workflow.png
│   │   └── Telegram_Bot_Operator.png
│   ├── 2/                              # CI/CD Pipeline Images
│   │   ├── GitHub_Branch_Merged.png
│   │   ├── GitHub_Build_Failed.png
│   │   ├── GitHub_Build_Successful.png
│   │   ├── Gmail_Email_Received.png
│   │   └── Main_Workflow.png
│   ├── 3/                              # Email Classification Images
│   │   ├── Gmail_Email_Pulled.png
│   │   ├── Main_Workflow.png
│   │   ├── Sub_Workflow.png
│   │   └── Telegram_Bot_Classifier.png
│   ├── 4/                              # B2B Lead Generation Images
│   │   ├── Google_Spreadsheet_B2B.png
│   │   └── Main_Workflow.png
│   ├── 5/                              # SSL Certificates and Checks Images
│   │   ├── Discord_Bot_Notifier.png
│   │   ├── File_SSL_Check.png
│   │   ├── Main_Workflow.png
│   │   └── Notion_Page_SSL.png
│   ├── 6/                              # Multi‑Media Agent Army Images
│   │   ├── Generated_Image.jpg
│   │   ├── Gmail_Email_Received.jpg
│   │   ├── Google_Document_Overview.jpg
│   │   ├── Google_Spreadsheet_Logs.jpg
│   │   ├── Main_Workflow.png
│   │   ├── Telegram_Bot_MultiModal_1.jpg
│   │   └── Telegram_Bot_MultiModal_2.jpg
│   ├── 7/                              # SEO Strategy Team Images
│   │   ├── Main_Workflow.png
│   │   └── SEO_Director_Model_Swarm.png
│   ├── 8/                              # AI Video Twitter/X Spam Images
│   │   ├── Main_Workflow.png
│   │   └── X_Account_AI_Slop_Post.png
│   ├── 9/                              # Local System RAG with RDBMS Images
│   │   ├── Local_RAG_System_Utilization.png
│   │   └── Main_Workflow.png
│   └── 10/                             # Client Feedback Form Images
│       ├── Airtable_AI-Analysis_Table.png
│       ├── Airtable_Input-Details_Table.png
│       ├── JotForm_Review_Form_1.png
│       ├── JotForm_Review_Form_2.png
│       ├── Main_Workflow.png
│       ├── Outlook_Email_Received_1.png
│       ├── Outlook_Email_Received_2.png
│       └── Slack_Bot_Notifier.png
|
└── README.md                           # This File
```

---

## 🚀 Automations Showcase

### 1️. Life Manager Telegram Bot

**Goal:** A Personal Assistant that helps manage your daily life via Telegram Chat. Create Calendar Events, Set Reminders, and Get/Post Task Updates with Prompt.

| Main Workflow |
|:---:|
| ![Main Workflow](Demonstrative_Images/1/Main_Workflow.png) | 

| Google Calendar Integration | Telegram Operator |
|:---:|:---:|
|![Google Calendar](Demonstrative_Images/1/Google_Calendar_Task.png) | ![Telegram Bot](Demonstrative_Images/1/Telegram_Bot_Operator.png) |

---

### 2️. Self‑Healing CI/CD Pipeline

**Goal:** Automate your GitHub CI/CD with Automatic Recovery. When a build fails, the workflow triggers a rollback, notifies the Team via Gmail, and Retries – healing itself.

| Main Workflow | Email Notification |
|:---:|:---:|
| ![Main](Demonstrative_Images/2/Main_Workflow.png) | ![Email](Demonstrative_Images/2/Gmail_Email_Received.png) |

| Build Success | Build Failed | Branch Merged | 
|:---:|:---:|:---:|
| ![Success](Demonstrative_Images/2/GitHub_Build_Successful.png) | ![Failed](Demonstrative_Images/2/GitHub_Build_Failed.png) | ![Merged](Demonstrative_Images/2/GitHub_Branch_Merged.png) | 

---

### 3️. Email Classification & Auto‑Response Drafting

**Goal:** Automatically classify incoming Emails and draft appropriate responses using AI. The classification and drafting are done via Sub‑workflows, and results are sent to a Telegram Bot for Approval or Displaying Results.

| Main Workflow | Sub‑Workflow | 
|:---:|:---:|
| ![Main](Demonstrative_Images/3/Main_Workflow.png) | ![Sub](Demonstrative_Images/3/Sub_Workflow.png) | 

| Email Pull | Telegram Bot Classifier |
|:---:|:---:|
|![Gmail Pull](Demonstrative_Images/3/Gmail_Email_Pulled.png) | ![Telegram](Demonstrative_Images/3/Telegram_Bot_Classifier.png) |

---

### 4️. B2B Lead Generation & Qualification

**Goal:** Automate B2B Lead Generation from web sources, enrich data, and qualify leads using AI. Results are stored in a Google Spreadsheet for easy tracking.

| Main Workflow | Spreadsheet Output |
|:---:|:---:|
| ![Main](Demonstrative_Images/4/Main_Workflow.png) | ![Spreadsheet](Demonstrative_Images/4/Google_Spreadsheet_B2B.png) |

---

### 5️. SSL Certificates & Alerts

**Goal:** Monitor SSL certificate expiry for your domains. When a certificate is about to expire, the workflow sends alerts via Discord Bot, creates a Notion Page with details, and logs the check to a file.

| Main Workflow | SSL Check File | 
|:---:|:---:|
| ![Main](Demonstrative_Images/5/Main_Workflow.png) | ![File Check](Demonstrative_Images/5/File_SSL_Check.png) | 

| Notion SSL Page | Discord Bot Alert |
|:---:|:---:|
| ![Notion](Demonstrative_Images/5/Notion_Page_SSL.png) | ![Discord](Demonstrative_Images/5/Discord_Bot_Notifier.png) |

*Also includes a JavaScript function `SSL-Health-Assessment.js` for custom logic.*

---

### 6️. Ultimate Multi‑Media Agent Army

**Goal:** A powerhouse of AI tools – Create Documents, Images, Videos, Edit Images, Convert Image to Video, and automatically post to Instagram, X, and TikTok. All orchestrated through a Telegram bot for Multi‑Modal Interaction.

| Main Workflow | 
|:---:|
| ![Main](Demonstrative_Images/6/Main_Workflow.png) | 

| Gmail Notification | Generated Image | 
|:---:|:---:|
| ![Gmail](Demonstrative_Images/6/Gmail_Email_Received.jpg) | ![Image](Demonstrative_Images/6/Generated_Image.jpg) | 

| Google Doc | Google Sheet Logs | 
|:---:|:---:|
| ![Doc](Demonstrative_Images/6/Google_Document_Overview.jpg) | ![Sheet](Demonstrative_Images/6/Google_Spreadsheet_Logs.jpg) | 

| Telegram Bot Query1 | Telegram Bot Query2 |
|:---:|:---:|
| ![Tele1](Demonstrative_Images/6/Telegram_Bot_MultiModal_1.jpg) | ![Tele2](Demonstrative_Images/6/Telegram_Bot_MultiModal_2.jpg) |

**Folder contains individual tool workflows:** `Create_Doc_Tool.json`, `Create_Image_Tool.json`, `Edit_Image_Tool.json`, `Create_Video_Tool.json`, `Image_to_Video_Tool.json`, `Instagram_Post.json`, `X_Post.json`, `Tiktok_Post.json`.

---

### 7️. Comprehensive SEO Strategy Team

**Goal:** Assemble an AI‑powered SEO team – Content Strategists, Keyword Researchers, and Technical SEO Experts – working in a swarm to generate a complete SEO Plan with Execution.

| Main Workflow | SEO Director Swarm |
|:---:|:---:|
| ![Main](Demonstrative_Images/7/Main_Workflow.png) | ![Swarm](Demonstrative_Images/7/SEO_Director_Model_Swarm.png) |

---

### 8️. AI Video Twitter/X Spam

**Goal:** Generate AI‑generated Video Content (slop) and automatically post it to X (Twitter) at Scheduled Intervals. Perfect for Automated Content Marketing.

| Main Workflow | X Bot Poster |
|:---:|:---:|
| ![Main](Demonstrative_Images/8/Main_Workflow.png) | ![X Post](Demonstrative_Images/8/X_Account_AI_Slop_Post.png) |

---

### 9️. Local System RAG with RDBMS

**Goal:** Build a Retrieval‑Augmented Generation (RAG) system that queries your Local Database (PostgreSQL/MySQL) and augments prompts with relevant data before sending to an LLM, providing contextually aware responses.

| Main Workflow | RAG Utilization |
|:---:|:---:|
| ![Main](Demonstrative_Images/9/Main_Workflow.png) | ![RAG](Demonstrative_Images/9/Local_RAG_System_Utilization.png) |

---

### 10. Client Feedback Form Airtable Analysis

**Goal:** Collect client feedback via JotForm, store responses in Airtable, and perform AI analysis on the feedback to extract sentiment, key themes, and action items. Notify team via Slack Bot and Outlook Emails.

| Main Workflow | Slack Bot Notifier | 
|:---:|:---:|
| ![Main](Demonstrative_Images/10/Main_Workflow.png) |![Slack](Demonstrative_Images/10/Slack_Bot_Notifier.png) |

| Airtable Input | Airtable Analysis | 
|:---:|:---:|
| ![Input Table](Demonstrative_Images/10/Airtable_Input-Details_Table.png) | ![Analysis Table](Demonstrative_Images/10/Airtable_AI-Analysis_Table.png) | 

| JotForm Upper | JotForm Lower |
|:---:|:---:|
| ![Form1](Demonstrative_Images/10/JotForm_Review_Form_1.png) | ![Form2](Demonstrative_Images/10/JotForm_Review_Form_2.png) |

| Outlook Email 1 | Outlook Email 2 |
|:---:|:---:|
| ![Outlook1](Demonstrative_Images/10/Outlook_Email_Received_1.png) | ![Outlook2](Demonstrative_Images/10/Outlook_Email_Received_2.png) |

---

## 🐳 Setup & Deployment

### Running n8n with Docker (Persistent Volumes)

To run n8n locally with persistent storage (so workflows and credentials survive container restarts), use the following Docker command:

```bash
docker run -d \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  -e N8N_SECURE_COOKIE=false \
  -e N8N_EDITOR_BASE_URL=http://localhost:5678 \
  n8nio/n8n
```

**Explanation:**
- `-v ~/.n8n:/home/node/.n8n` – mounts a local folder to persist database, workflows, and credentials.
- `-p 5678:5678` – exposes the web interface on port 5678.

**For production**, consider using a dedicated volume:

```bash
docker volume create n8n_data
docker run -d \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e N8N_ENCRYPTION_KEY=your-secret-key \
  -e DB_TYPE=postgresdb \
  -e DB_POSTGRESDB_HOST=postgres \
  -e DB_POSTGRESDB_DATABASE=n8n \
  -e DB_POSTGRESDB_USER=n8n \
  -e DB_POSTGRESDB_PASSWORD=password \
  n8nio/n8n
```

*(This example uses an external PostgreSQL database – adjust as needed.)*

### Importing Workflows

1. Access the n8n editor at `http://localhost:5678`.
2. Click on the **Import** button (top‑right) or navigate to **Workflows** → **Import from File**.
3. Select the `.json` workflow file from the desired folder.
4. The workflow will be imported; you may need to adjust credentials (e.g., API keys, OAuth tokens) before Activating.

> **Note:** Some workflows depend on external services (Telegram, Google, GitHub, etc.). You will need to set up the corresponding credentials inside n8n’s credential manager before they can run.

---

## 📜 License

This Repository is provided under the MIT License – feel free to Use, Modify, and Distribute these workflows for your own Automation Needs.

---

<div align="center">
  
**⭐ If you find these automations useful, please consider giving this repository a star!**

*Automate everything, intelligently.*

[![n8n](https://img.shields.io/badge/n8n-⭐-blue?style=for-the-badge&logo=n8n)](https://n8n.io/)

</div>
