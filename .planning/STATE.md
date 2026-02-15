# STATE — Session Continuity Tracker

> **Purpose:** Prevents context rot between Cascade sessions. Read this file at the start of every new conversation.

## Last Updated
- **Date:** 2026-02-14
- **Session:** Reporting planning + read-only email reporting baseline

## Current Phase
- **Active Milestone:** Phase 1.1 — Project Setup & Meta API Integration
- **Active Phase:** Read-only reporting implementation and schedule setup
- **Status:** API token validated, target account access fixed, daily fatigue reporting implemented

## What Was Done This Session (2026-02-14)
- Corrected target account config and verified read access for `act_480055528426852`
- Confirmed active campaigns + stats + catalog are readable on target account
- Updated planning docs for business goals, naming convention, thresholds, and report schedule
- Added SMTP/report schedule placeholders to `.env.example`
- Implemented read-only fatigue reporting module: `src/reporting/fatigue_report.py`
- Updated fatigue reporting granularity from ad set level to ad level for more precise fatigue detection
- Implemented SMTP sender module: `src/notifications/email_sender.py`
- Added report CLI entrypoint: `src/scripts/send_fatigue_report.py`
- Added actionable multi-level performance report module: `src/reporting/performance_report.py`
- Added performance report CLI sender: `src/scripts/send_performance_report.py`
- Added tests and test isolation (`tests/test_fatigue_report.py`, `pytest.ini`)
- Added performance report tests (`tests/test_performance_report.py`)
- Created repeatable analysis workflow integrating reports with skills (`.windsurf/workflows/analyze-performance.md`)
- Implemented winner tracking database with SQLAlchemy models (`src/database/models.py`)
- Added winner collection script with ROAS/CTR/conversion criteria (`src/scripts/collect_winners.py`)
- Added reactivation recommendation engine with priority scoring (`src/scripts/recommend_reactivations.py`)
- Updated README and TASK.md to reflect reporting workflow

## What Needs Attention Next
1. **SMTP Completion** — Fill real SMTP credentials and recipient list in `.env`
2. **Report Scheduling Runtime** — Activate cron jobs for 06:00 daily fatigue and Saturday 07:00 performance reports
3. **Run First Analysis Workflow** — Execute `.windsurf/workflows/analyze-performance.md` to test skill integration
4. **Collect Initial Winners** — Run `collect_winners.py` without --dry-run to populate database
5. **Weekly Report Expansion** — Add catalog-focused weekly section (product-level winners/issues)
6. **A/B Test Analyzer** — Build statistical significance testing for copy/creative comparisons
7. **Campaign Builder with AI** — Add guided campaign creation with target setting
8. **Margin-Aware Layer (Future)** — Plan Dolibarr ERP integration to move from ROAS to profit-aware decisions

## Current Blockers
- SMTP credentials/recipient config not filled yet in `.env`, so email delivery step is pending

## Key Project Context
- **Business:** Bolivian bike shop (hiplus.de) with $500-2,000 monthly ad budget
- **Focus:** ROAS optimization through frequency monitoring and budget automation
- **Market:** Bolivia (Spanish language), Santa Cruz repair shop + online sales
- **Current Campaigns:** Awareness + Catalog/Dynamic Product Ads
- **Success Target:** 20% ROAS improvement, frequency <2.5 (awareness) / <3.0 (conversion)

## Technical Architecture Decisions
- **Language:** Python 3.9+ with facebook-business SDK
- **Database:** SQLite (dev) → PostgreSQL (prod)
- **Automation:** Hybrid approach (scheduled + real-time alerts)
- **Safety:** Manual approval for budget changes >20%
- **Monitoring:** Hourly performance checks with comprehensive logging

## Context Window Notes
- **If context feels degraded:** Start a new Cascade conversation and run `/init`
- **Key files to re-read:** `.planning/PROJECT.md`, `.planning/STATE.md`, `TASK.md`
- **Never assume previous context:** Always verify by reading STATE.md

## Session Handoff Checklist
✅ **What was accomplished:** target account access fixed + read-only fatigue report/email baseline implemented
✅ **What is in progress:** report scheduling and weekly report extension
⏸️ **What is blocked:** waiting for SMTP values in `.env` for live email sending
🔍 **New issues discovered:** variable margins require future ERP integration for profit-aware optimization
🎯 **Next priority actions:** complete SMTP config, then activate daily and weekly scheduled reports
