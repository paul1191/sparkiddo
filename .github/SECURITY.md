# Security Policy — Sparkiddo

> **sparkiddo.com** · A kids learning & gaming platform  
> Built with care for children's safety, privacy, and wellbeing.

---

## 🛡️ Our Security Commitment

Sparkiddo is a platform used by children and families.
We take security and privacy issues **extremely seriously**.
We are committed to responding to all legitimate security
reports quickly and transparently.

---

## ✅ Supported Versions

| Version | Status          |
|---------|-----------------|
| Latest  | ✅ Supported     |
| Older   | ❌ Not supported |

We maintain only the current live version at sparkiddo.com.
Always test against the latest version before reporting.

---

## 🔍 Scope — What We Want to Hear About

We welcome responsible disclosure of:

- **Authentication vulnerabilities** — login bypass, session
  hijacking, token leakage, broken OAuth flows
- **Data exposure** — any unintended exposure of parent or
  child profile data
- **Supabase / database misconfigurations** — RLS bypass,
  unauthorised data access
- **Cross-site scripting (XSS)** in any web pages
- **Cross-site request forgery (CSRF)** vulnerabilities
- **Insecure direct object references (IDOR)** — accessing
  another user's child profiles or settings
- **Content injection** — ability to inject malicious
  content into game pages or parent dashboard
- **Notification abuse** — unauthorised push notification
  sending to users
- **Children's data violations** — any bug that could
  expose a child's name, avatar, XP data, or activity
  to unauthorised parties

---

## 🚫 Out of Scope

Please do **not** report the following:

- Theoretical vulnerabilities without a working proof
  of concept
- Social engineering attacks targeting our team
- Denial of service (DoS/DDoS) attacks
- Physical security issues
- Issues in third-party services we use (Supabase,
  Cloudflare, Expo) — report those directly to them
- Missing security headers that do not lead to
  exploitable vulnerabilities
- Self-XSS or issues requiring physical device access
- Clickjacking on pages with no sensitive actions

---

## 📬 How to Report

**Please do NOT open a public GitHub issue for security
vulnerabilities.** Public disclosure before a fix is
deployed puts our child users at risk.

Instead, report privately via:

| Channel | Details |
|---------|---------|
| **Email** | hello@sparkiddo.com |
| **Subject line** | `[SECURITY] Brief description` |
| **Response time** | Within 48 hours |
| **Fix target** | Within 7 days for critical, 30 days for others |

### What to include in your report

Please provide as much detail as possible:

```
1. Type of vulnerability
2. Affected URL or component
3. Step-by-step reproduction steps
4. Proof of concept (screenshot, video, or code)
5. Potential impact — what data or functionality is at risk
6. Your suggested fix (optional but appreciated)
```

---

## 🔐 Responsible Disclosure Policy

We follow a **coordinated disclosure** model:

1. You report the vulnerability to us privately
2. We acknowledge receipt within **48 hours**
3. We investigate and develop a fix
4. We deploy the fix
5. We notify you when the fix is live
6. You may publicly disclose **30 days** after the fix,
   or earlier with our written agreement

We ask that you:
- Give us reasonable time to fix issues before disclosure
- Not access, modify, or delete user data during testing
- Not perform testing that degrades service for real users
- Not test against real child accounts

---

## 👶 Children's Data — Extra Care Required

Sparkiddo stores data about children (first name, avatar,
XP scores, games played). This data is protected under:

- **India's Digital Personal Data Protection Act (DPDPA)**
- **COPPA** (Children's Online Privacy Protection Act — US)
- **GDPR** (General Data Protection Regulation — EU)

Any vulnerability that could expose children's data will
be treated as **critical severity** and addressed within
**24 hours** regardless of complexity.

---

## 🏅 Recognition

We do not currently offer a paid bug bounty programme.
However, we gratefully acknowledge responsible security
researchers who help keep Sparkiddo safe for children:

- Your name/handle will be credited in our security
  acknowledgements (with your permission)
- Early access to Sparkiddo Plus for meaningful findings
- A personal thank-you from the Sparkiddo team

---

## 📋 Vulnerability Severity Guide

| Severity | Examples | Response |
|----------|----------|----------|
| 🔴 Critical | Child data exposure, auth bypass | 24 hours |
| 🟠 High | XSS, IDOR, session hijack | 7 days |
| 🟡 Medium | CSRF, info leakage | 14 days |
| 🟢 Low | Minor misconfigurations | 30 days |

---

## 🔗 Third-Party Security Contacts

For issues in services we depend on:

| Service | Security Contact |
|---------|-----------------|
| Supabase | security@supabase.io |
| Cloudflare | https://cloudflare.com/disclosure |
| Expo / React Native | security@expo.dev |

---

## ⚖️ Legal

Sparkiddo will not pursue legal action against security
researchers who:

- Act in good faith and follow this policy
- Do not access data beyond what is needed to prove
  the vulnerability
- Do not disrupt service or harm real users
- Report findings to us before any public disclosure

We consider responsible security research a positive
contribution to our platform and our child users'
safety.

---

*Last updated: 2026*  
*© 2026 Sparkiddo — sparkiddo.com*
