# PROJECT — Meta Ads Automation System

> **One-liner:** Intelligent Meta Ads automation system for Bolivian bike shop that optimizes ROAS through automated campaign management, frequency monitoring, and performance-based scaling.

## Business Context
- **Company:** Bike shop serving Bolivia (online + local repair in Santa Cruz)
- **Website:** www.hiplus.de (Shopify)
- **Market:** Bolivian cycling market
- **Experience:** 10 years in Meta advertising
- **Budget:** $500-2,000 USD monthly
- **Current Focus:** Awareness campaigns + Catalog/Dynamic Product Ads

## Primary Business Goals (Meta)
- **Primary revenue goal:** Shopify purchases on hiplus.de (Meta Purchase event; estimated order value available)
- **Secondary revenue goal:** WhatsApp-assisted purchases (tracked later; Phase 1 uses proxy signals where needed)
- **Special funnel:** bidones.hiplus.de customized sports bottles → optimize for Leads or Landing Page Views depending on campaign
- **Maintenance/local store:** awareness + local store visits (proxy metrics)

## Tech Stack
- **Core Language:** Python 3.9+
- **Meta Integration:** Meta Marketing API (Facebook Business SDK)
- **Data Storage:** SQLite (development) → PostgreSQL (production)
- **Scheduling:** APScheduler for automated tasks
- **Web Dashboard:** FastAPI + React (optional monitoring interface)
- **Analytics:** Pandas for data analysis
- **Notifications:** Email alerts + Slack integration
- **Deployment:** Docker containers

## Architecture
```
src/
├── automation/          → Core automation engine
│   ├── campaign_monitor.py   → Frequency & performance monitoring
│   ├── budget_optimizer.py  → Automated budget adjustments
│   └── creative_analyzer.py → Ad creative performance analysis
├── api/                → Meta Marketing API integration
│   ├── meta_client.py       → API wrapper and authentication
│   └── data_fetcher.py      → Campaign data retrieval
├── analytics/          → Performance analysis & recommendations
│   ├── roas_calculator.py   → ROAS and KPI calculations
│   └── trend_analyzer.py    → Performance trend detection
├── database/           → Data persistence layer
│   ├── models.py           → Database schema
│   └── migrations/         → Database version control
├── dashboard/          → Web interface (optional)
├── config/             → Configuration management
└── tests/              → Unit and integration tests
```

## Key Patterns
- **Hybrid automation:** Scheduled monitoring + real-time alerts
- **API-first design:** All actions via Meta Marketing API
- **Data-driven decisions:** Performance thresholds trigger actions
- **Fail-safe mechanisms:** Manual approval for high-impact changes
- **Comprehensive logging:** Track all automated actions and decisions

## Campaign Naming Convention (Phase 1)

**Format**
`{GOAL}-{CHANNEL} | {CATEGORY} | {FORMAT} | {AUDIENCE} | {GEO} | {OFFER/ANGLE} | {PLACEMENT} | {DATE} | {OWNER}`

**Allowed values (starter set)**
- `GOAL`:
  - `SALES` (purchase)
  - `CAT` (catalog / DPA)
  - `LEAD` (instant form)
  - `LPV` (landing page view)
  - `AWARE` (awareness)
- `CHANNEL`:
  - `WEB` (website)
  - `WA` (WhatsApp)
  - `STORE` (local store)
- `FORMAT`:
  - `VID`, `IMG`, `CAR` (carousel), `COL` (collection)
- `CATEGORY` (standardized):
  - `Sportsbottles`
  - `Bikes`
  - `PartsAccessories`
  - `Workshop`
- `AUDIENCE` (recommended tagging even if Meta suggests audiences):
  - `Broad`
  - `Local-{km}` (e.g. `Local-5km` for Workshop)
  - `Retarget-{window}` (e.g. `Retarget-30d`)
  - `LAL-{source}-{pct}` (e.g. `LAL-Customers-1%`, `LAL-VideoViews-2%`, `LAL-Leads-1%`)
  - `Saved-{name}` (when using saved audiences)

**Examples**
- `CAT-WEB | Bicicletas | CAR | Retarget-30d | SCZ | Oferta-Feb | Auto | 2026-02 | Nils`
- `SALES-WEB | Accesorios | VID | Broad | BO | BestSellers | Auto | 2026-02 | Nils`
- `LEAD-WEB | Bidones | IMG | Lookalike-1% | BO | Personalizado | Auto | 2026-02 | Nils`
- `AWARE-STORE | Mantenimiento | VID | Local-5km | SCZ | Taller | Auto | 2026-02 | Nils`

## Constraints
- **Budget limitations:** $500-2,000 monthly requires careful optimization
- **Bolivian market:** Spanish language, local cultural considerations
- **Existing setup:** Must integrate with current Facebook/Instagram presence
- **Manual creative:** User handles video/image creation, AI handles copy
- **Conservative automation:** Protect against accidental overspending

## Success Metrics
- **Primary:** Improved ROAS (Return on Ad Spend)
- **Secondary:** Reduced ad frequency, optimized budget allocation
- **Operational:** Reduced manual management time
- **Strategic:** Better creative performance insights
