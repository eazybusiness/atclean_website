# Meta Ads Automation Project Rules

## What is this?
Meta Ads automation system for Bolivian bike shop that optimizes ROAS through intelligent campaign management, frequency monitoring, and performance-based scaling.

## How do I run things?
1. **Development Setup:**
   ```bash
   cd /home/nop/CascadeProjects/Meta_ads
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   cp .env.example .env  # Configure Meta API credentials
   python src/main.py
   ```

2. **Meta API Setup:**
   - Create Meta Business Manager account
   - Generate App ID, App Secret, Access Token
   - Configure webhook endpoints for real-time alerts
   - Set up Facebook Pixel tracking on hiplus.de

3. **Database Setup:**
   ```bash
   python src/database/migrations/init_db.py
   python src/scripts/initial_data_sync.py
   ```

## What patterns do I follow?

### IMPORTANT: Safety-First Automation
- **Never auto-execute budget changes >20%** without manual approval
- **Always log every automated action** with timestamp, reason, and result
- **Implement rollback capability** for all automated changes
- **Set hard spending limits** to prevent accidental overspending
- **Require confirmation** for campaign pauses/deletions

### Code Architecture Patterns
- **API-first design:** All Meta interactions via Marketing API
- **Data-driven decisions:** Performance thresholds trigger actions
- **Modular components:** Separate monitoring, analysis, and action modules
- **Configuration-driven:** Thresholds and rules in config files, not hardcoded
- **Comprehensive logging:** Track all decisions and automated actions

### Meta Ads Specific Patterns
- **Frequency thresholds:** Awareness ads <2.5, Conversion ads <3.0
- **Performance windows:** Analyze 7-day rolling averages, not daily spikes
- **Budget redistribution:** Move budget from CPA >$50 to CPA <$20 ad sets
- **Creative rotation:** Flag ads with declining CTR over 3+ days
- **Scaling rules:** Increase budget by max 20% per day for winning ads

### Bolivian Market Considerations
- **Spanish language:** All user-facing content and ad copy in Spanish
- **Local culture:** Understand cycling culture and seasonal patterns
- **Currency handling:** USD pricing with local payment considerations
- **Time zones:** Bolivia (UTC-4) for scheduling and reporting

## Edge Cases & Common Pitfalls

### Meta API Limitations
- **Rate limiting:** Max 200 calls per hour per app
- **Data delays:** Performance data has 24-48 hour lag
- **Attribution windows:** 7-day click, 1-day view default
- **Batch operations:** Use batch API for multiple updates

### Budget Optimization Pitfalls
- **Learning phase disruption:** Don't modify budgets during learning phase
- **Frequency spikes:** Monitor frequency daily, not just weekly averages
- **Seasonal variations:** Account for holiday/seasonal spending patterns
- **Attribution gaps:** ROAS calculations may be incomplete for 48 hours

### Technical Edge Cases
- **API token expiration:** Implement automatic token refresh
- **Network failures:** Retry logic with exponential backoff
- **Data inconsistencies:** Cross-validate Meta data with Shopify
- **Campaign structure changes:** Handle manual campaign modifications gracefully

## How do we work?

### Development Process
1. **Planning phase:** Use GSD methodology with .planning/ files
2. **Implementation:** Small, atomic commits with clear messages
3. **Testing:** Unit tests for all automation logic, integration tests for API calls
4. **Deployment:** Staged rollout with monitoring and rollback capability
5. **Monitoring:** Real-time alerts for system issues and performance anomalies

### Meta Ads Workflow
1. **Data Collection:** Hourly sync of campaign performance data
2. **Analysis:** Calculate KPIs, identify trends, flag issues
3. **Decision Making:** Apply rules engine to determine actions
4. **Action Execution:** Implement changes via Meta Marketing API
5. **Monitoring:** Track results and adjust thresholds as needed

### Client Communication
- **Weekly reports:** Automated performance summaries
- **Alert notifications:** Immediate alerts for critical issues
- **Monthly reviews:** Strategic recommendations and insights
- **Quarterly optimization:** Review and adjust automation rules

### Skills Integration
- **Primary skill:** `paid-ads` for Meta advertising expertise
- **Secondary skills:** `data-analyst` for performance analysis, `brainstorming` for feature planning
- **Future skills:** May need additional skills for advanced features

## File Organization
```
src/
├── automation/          → Core automation logic
├── api/                → Meta Marketing API integration  
├── analytics/          → Performance analysis
├── database/           → Data models and migrations
├── config/             → Configuration management
├── dashboard/          → Web interface (optional)
└── tests/              → Unit and integration tests

.planning/              → GSD project management
├── PROJECT.md          → Project overview
├── REQUIREMENTS.md     → Feature requirements
├── ROADMAP.md          → Development phases
└── STATE.md            → Current project state

docs/                   → Documentation
├── api_reference.md    → Meta API usage guide
├── deployment.md       → Deployment instructions
└── troubleshooting.md  → Common issues and solutions
```

## Key Dependencies
- `facebook-business` - Meta Marketing API SDK
- `pandas` - Data analysis and manipulation
- `sqlalchemy` - Database ORM
- `apscheduler` - Task scheduling
- `fastapi` - Web API framework (for dashboard)
- `pydantic` - Data validation
- `python-dotenv` - Environment variable management
