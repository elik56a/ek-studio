import { Tool } from "@/lib/tools/types"

/**
 * JWT Decoder Tool Configuration
 *
 * Decodes JSON Web Tokens (JWT) to inspect header and payload claims.
 * Essential for debugging OAuth2/OIDC authentication, inspecting token expiration,
 * and troubleshooting 401/403 authorization errors.
 * Runs entirely in-browser using Base64URL parsing for privacy.
 */
export const jwtDecoderTool: Tool = {
  id: "jwt-decoder",
  slug: "jwt-decoder",
  name: "JWT Decoder",
  description:
    "Decode JSON Web Tokens (JWT) locally to inspect header, payload claims, expiration, issuer/audience, and debug OAuth2/OIDC authentication issues",
  category: "security",
  type: "converter",
  order: 1,
  keywords: [
    "jwt decoder",
    "decode jwt",
    "jwt claims",
    "jwt payload",
    "oauth2 token",
    "oidc token",
    "bearer token",
    "jwt inspector",
  ],
  metadata: {
    title: "JWT Decoder & Claims Inspector (OAuth2 / OIDC)",
    description:
      "Decode JWT tokens online (locally). Inspect header/payload claims, check exp/nbf/iat, issuer & audience, and debug OAuth2/OIDC bearer tokens securely.",
    keywords: [
      "jwt decoder",
      "jwt claims inspector",
      "decode jwt token",
      "oauth2 token decoder",
      "oidc id token decoder",
      "jwt payload decoder",
      "jwt header decoder",
    ],
  },
  info: {
    description:
      "JWT Decoder & Claims Inspector is a developer-focused tool for decoding JSON Web Tokens used in OAuth2, OpenID Connect (OIDC), SSO, and API authentication. Paste a token and instantly view the decoded header and payload as readable JSON, including common claims like exp (expiration), nbf (not before), iat (issued at), iss (issuer), aud (audience), sub (subject), scope, and roles. This helps you debug 401/403 errors, confirm what your identity provider is sending, and spot risky configurations such as unexpected algorithms or missing validation-critical claims. Decoding runs entirely in your browser using Base64URL parsing—no requests, no storage, and no token logging.",
    howToUse: [
      "Copy the full JWT (three dot-separated parts) from an Authorization header, cookie, or API response",
      "Paste the token into the JWT input field",
      'Click "Decode JWT" to display the decoded header and payload JSON',
      "Review exp/nbf/iat timestamps to confirm token validity window",
      "Check iss (issuer) and aud (audience) for common OAuth2/OIDC misconfigurations",
      "Inspect scopes/roles/permissions to verify authorization behavior",
      "Copy decoded JSON for debugging notes or bug reports (avoid sharing real production data)",
    ],
    useCases: [
      "Fix 401 Unauthorized: Identify expired tokens (exp), wrong issuer (iss), or mismatched audience (aud)",
      "Debug OAuth2/OIDC flows: Inspect scopes, client_id, nonce, and identity claims for login issues",
      "Inspect RBAC permissions: Confirm roles/permissions claims match expected access rules",
      "Troubleshoot microservices auth: Compare tokens at gateway vs downstream services to find where claims change",
      "Validate SSO integrations: Verify what your IdP includes in the token without guessing",
      "Detect suspicious headers: Spot unexpected alg values or missing token fields that break verification",
    ],
    features: [
      "Instant Base64URL decoding of header and payload",
      "Readable JSON output with formatting for fast claim inspection",
      "Highlights common validation-critical claims (exp, nbf, iat, iss, aud, sub)",
      "Helps debug OAuth2/OIDC bearer tokens and ID tokens",
      "No network calls: runs fully in-browser for privacy",
      "Copy-friendly decoded output for troubleshooting",
    ],
  },
  examples: [
    {
      title: "Decode a JWT with identity claims",
      input:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      description:
        "Inspect common claims like sub (user id), name, and iat (issued at) to understand what the token represents",
    },
    {
      title: "Inspect an OAuth2 token with roles",
      input:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MjEiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
      description:
        "Verify roles/permissions and the exp timestamp when debugging RBAC authorization",
    },
    {
      title: "Find why a token is rejected (expired exp)",
      input:
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDAxIiwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
      description:
        "Check the exp claim to confirm whether expiration is causing 401 errors",
    },
    {
      title: "Validate issuer and audience (SSO troubleshooting)",
      input:
        "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRoLmV4YW1wbGUuY29tIiwiYXVkIjoiYXBpLmV4YW1wbGUuY29tIn0.signature",
      description:
        "Confirm iss/aud values match your OAuth provider and API verification settings",
    },
    {
      title: "Spot risky algorithm choice (header inspection)",
      input:
        "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJhdHRhY2tlciIsImFkbWluIjp0cnVlfQ.",
      description:
        "Inspect the header alg field and flag unsafe configurations (never accept 'none' in production verification)",
    },
    {
      title: "Inspect an OIDC ID token payload",
      input:
        "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKb2huIERvZSIsInBpY3R1cmUiOiJodHRwczovL2V4YW1wbGUuY29tL3Bob3RvLmpwZyJ9.signature",
      description:
        "Verify identity claims like email/email_verified/name when debugging OIDC login flows",
    },
  ],
  faq: [
    {
      question: "What is a JWT (JSON Web Token)?",
      answer:
        "A JWT is a compact token format used for authentication and authorization. It has three parts: header, payload (claims), and signature, separated by dots.",
    },
    {
      question: "How do I decode a JWT token to debug 401 errors?",
      answer:
        "Decode the token and check exp (expired), iss (wrong issuer), aud (wrong audience), and missing fields like sub/scope/roles. These are common causes of 401/403 failures.",
    },
    {
      question: "Does this JWT decoder verify the signature?",
      answer:
        "No. This tool decodes and displays the header/payload only. Signature verification must be done server-side using the correct secret/public key and allowed algorithms.",
    },
    {
      question: "What do exp, iat, and nbf mean in a JWT?",
      answer:
        "exp is expiration time, iat is issued-at time, and nbf is not-before time. They are Unix timestamps that define when a token is valid.",
    },
    {
      question:
        "What is the difference between an OAuth2 access token and an OIDC ID token?",
      answer:
        "Access tokens authorize API access (often contain scopes/permissions). ID tokens represent user identity for the client app (often contain profile claims like email/name).",
    },
    {
      question: "Is it safe to paste a production JWT into an online decoder?",
      answer:
        "This decoder runs locally in your browser and doesn't send tokens to a server. Still, treat JWTs like sensitive data—avoid sharing real production tokens in screenshots or bug reports.",
    },
    {
      question: "Why is 'alg: none' considered dangerous?",
      answer:
        "'none' means no signature. If a backend mistakenly accepts it during verification, attackers can forge tokens. Always restrict allowed algorithms on the server.",
    },
    {
      question: "Why does my token fail to decode or look corrupted?",
      answer:
        "Common causes are missing segments (not three parts), whitespace/newlines added during copy, or the token isn't a JWT (it might be an opaque token or a JWE with five parts).",
    },
  ],
  relatedTools: [
    "hash-generator",
    "base64-encode-decode",
    "uuid-generator",
    "password-generator",
    "json-formatter",
    "url-encode-decode",
  ],
  ui: {
    inputPlaceholder: "Paste your JWT token (header.payload.signature)...",
    outputPlaceholder: "Decoded header and payload will appear here...",
    inputLabel: "JWT Token",
    outputLabel: "Decoded JWT",
    convertLabel: "Decode JWT",
  },
}
