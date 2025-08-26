# Optiview - STARTHack 25

**Smart HVAC Analytics for Belimo Cloud Data**

Developed during [STARTHack 25](https://www.startglobal.org/start-hack/home/) (March 19-21, 2025) in St. Gallen, Switzerland. Optiview transforms raw HVAC operational data from Belimo Cloud into actionable business intelligence and predictive maintenance insights.

## 🎯 Project Overview

Belimo's smart HVAC devices generate extensive data streams (flow rates, temperatures, power consumption) that often remain underutilized. Our platform connects to Belimo Cloud via Delta Sharing, processes time-series data with Apache Spark, and delivers:

- **Dynamic Performance Dashboard**: Real-time HVAC metrics and energy usage visualization
- **Smart Alerts & Predictive Maintenance**: Early warnings for equipment anomalies and potential failures  
- **Energy Optimization**: Data-driven recommendations to reduce consumption and costs

## 🛠 Tech Stack

### Frontend
- **[Svelte/SvelteKit](https://svelte.dev/docs)** - Modern web framework
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Shadcn-Svelte](https://www.shadcn-svelte.com/)** - Component library

### Backend
- **[Hono](https://hono.dev/)** - Fast web framework
- **[FastAPI](https://fastapi.tiangolo.com/)** - Python API framework
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM

### Database & Services
- **PostgreSQL** - Primary database
- **[Supabase](https://supabase.com/)** - Backend services (auth, storage)
- **Apache Spark** - Large-scale data processing
- **Delta Sharing** - Belimo Cloud integration

## 🚀 Quick Start

### Prerequisites
- **[Node.js](https://nodejs.org/)** & **[pnpm](https://pnpm.io/)**
- **[uv](https://docs.astral.sh/uv/)** (Python package manager)
- **[Docker](https://www.docker.com/)** & Docker Compose
- **Git** with SSH keys configured

### Setup
```
# Clone repository
git clone git@github.com:techboy-coder/starthack25.git
cd starthack25

# Install dependencies
pnpm install
uv sync

# Start services
docker-compose up -d

# Start development servers
pnpm dev
```

## 👥 Team

- **Mika Schoch**
- **Yan Kleiner**
- **Parthiv Kangsabanik**

## 🏆 Hackathon Achievement

Successfully addressed the Belimo challenge at STARTHack 25, demonstrating how data assets can be transformed into powerful energy optimization tools and new revenue streams.

---

*Built with ❤️ at Europe's most entrepreneurial hackathon*
