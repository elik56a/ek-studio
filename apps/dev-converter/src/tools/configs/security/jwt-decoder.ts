import { Tool } from "@/lib/tools/types"


export const jwtDecoderTool: Tool = {
  id: "jwt-decoder",
  slug: "jwt-decoder",
  name: "JWT Decoder",
  description:
    "Decode JWT tokens locally to inspect header + payload claims (exp/nbf/iat, iss/aud, scopes/roles) and debug OAuth2/OIDC authentication issues.",
  category: "security",
  type: "converter",
  order: 1,
  keywords: [
    "jwt decoder",
    "jwt decoder online",
    "decode jwt",
    "decode jwt token",
    "jwt claims",
    "jwt payload decoder",
    "jwt header decoder",
    "jwt inspector",
    "jwt parser",
    "oauth2 token",
    "oauth2 access token",
    "oidc token",
    "oidc id token",
    "bearer token",
    "authorization header",
    "jwt exp iat nbf",
    "jwt issuer audience",
    "jws decoder",
    "jwe vs jwt",
  ],
  metadata: {
    title: "JWT Decoder & Claims Inspector (exp/iat/nbf, iss/aud, scopes/roles)",
    description:
      "Decode a JWT locally in your browser. Inspect header/payload claims, check exp/nbf/iat validity, issuer & audience, and debug OAuth2/OIDC access tokens and ID tokens securely.",
    keywords: [
      "jwt decoder",
      "jwt claims inspector",
      "decode jwt token",
      "jwt payload decoder",
      "jwt header decoder",
      "oauth2 token decoder",
      "oidc id token decoder",
      "jwt exp iat nbf",
      "jwt issuer audience",
      "bearer token decoder",
      "jws decoder",
    ],
  },
  info: {
    description:
      "JWT Decoder & Claims Inspector is a developer tool for decoding JSON Web Tokens (JWT/JWS) used in OAuth2, OpenID Connect (OIDC), SSO, and API authentication. Paste a token and instantly view the decoded header and payload as readable JSON, including important claims like exp (expiration), nbf (not before), iat (issued at), iss (issuer), aud (audience), sub (subject), jti (token id), scope/scp, roles, permissions, and custom app claims. This is ideal for debugging 401/403 errors, validating that your identity provider (Auth0/Okta/Cognito/Keycloak/etc.) is issuing the expected claims, and catching risky headers such as unexpected alg values. Decoding happens locally with Base64URL parsing—no network calls, no storage, and no token logging.",
    howToUse: [
      "Copy the full token from your Authorization header (Bearer …), cookie, localStorage, or API response",
      "Paste the JWT into the input field (format: header.payload.signature)",
      'Click "Decode JWT" (or decode automatically) to view header + payload as JSON',
      "Check exp/nbf/iat to confirm the token is currently valid (clock skew can matter)",
      "Verify iss (issuer) and aud (audience) match what your backend expects",
      "Inspect scope/scp/roles/permissions claims to understand authorization decisions",
      "Confirm typ/kid/alg in the header to ensure your verification settings match",
      "Copy decoded JSON when debugging (avoid sharing real production tokens publicly)",
    ],
    useCases: [
      "Fix 401 Unauthorized: Confirm exp is not expired and nbf is not in the future",
      "Fix 403 Forbidden: Inspect scopes/roles/permissions claims vs your RBAC rules",
      "Debug OAuth2/OIDC issues: Verify iss/aud, client_id/azp, nonce, and identity claims",
      "Troubleshoot API gateways: Compare claims at the edge vs downstream services",
      "Validate SSO integrations: Ensure your IdP includes the claims your app requires",
      "Check token type: Distinguish access tokens vs ID tokens by typical claim patterns",
      "Detect suspicious headers: Spot alg=none, unexpected typ, missing kid, or weird structures",
      "Explain auth bugs in PRs/tickets: Copy readable claim JSON instead of raw tokens",
    ],
    features: [
      "Instant Base64URL decoding of JWT header + payload",
      "Readable JSON output (great for debugging and documentation)",
      "Highlights validation-critical claims: exp, nbf, iat, iss, aud, sub, jti",
      "Works for OAuth2 access tokens and OIDC ID tokens (claim inspection)",
      "Helps triage 401 vs 403 quickly by inspecting validity vs permissions",
      "Local-only processing: no network calls, no uploads, privacy-first",
      "Copy-friendly output for bug reports (sanitize sensitive claims first)",
      "Handles common real-world claim shapes: scope/scp arrays/strings, roles, permissions",
    ],
  },

  examples: [
    {
      title: "Decode a JWT with basic identity claims",
      input:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      description:
        "Inspect sub, name, and iat to understand what the token represents.",
    },
    {
      title: "Check expiration window (exp/nbf/iat)",
      input:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyXzEyMyIsImlhdCI6MTcwMDAwMDAwMCwibmJmIjoxNzAwMDAwMDAwLCJleHAiOjE3MDAwMDM2MDB9.signature",
      description:
        "Confirm whether the token is valid right now (watch for exp and nbf).",
    },
    {
      title: "OAuth2 access token with scopes (scope string)",
      input:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguZXhhbXBsZS5jb20iLCJhdWQiOiJodHRwczovL2FwaS5leGFtcGxlLmNvbSIsInN1YiI6InVzZXJfMTIzIiwic2NvcGUiOiJyZWFkOnVzZXJzIHdyaXRlOnVzZXJzIiwiaWF0IjoxNzAwMDAwMDAwLCJleHAiOjE3MDAwMDM2MDB9.signature",
      description:
        "Inspect iss/aud and scope when debugging 401/403 authorization issues.",
    },
    {
      title: "OAuth2 token with roles array (RBAC debugging)",
      input:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MjEiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwicGVybWlzc2lvbnMiOlsicmVhZDpyZXBvcnRzIiwid3JpdGU6dXNlcnMiXSwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
      description:
        "Verify roles/permissions claims vs your RBAC rules when access is denied.",
    },
    {
      title: "Validate issuer and audience (common OIDC misconfiguration)",
      input:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkcC5leGFtcGxlLmNvbS8iLCJhdWQiOiJteS1hcGktYXVkaWVuY2UiLCJzdWIiOiJ1c2VyXzEyMyIsImV4cCI6MTczNjIwODAwMH0.signature",
      description:
        "Confirm iss/aud match your backend’s expected issuer and audience values.",
    },
    {
      title: "Spot algorithm/header issues (kid/alg/typ)",
      input:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMjYtMDEta2V5LTEiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJ1c2VyXzEyMyIsImF1ZCI6ImFwaSIsImlzcyI6Imh0dHBzOi8vYXV0aC5leGFtcGxlLmNvbSIsImV4cCI6MTczNjIwODAwMH0.signature",
      description:
        "Use header fields (alg/kid/typ) to debug signature verification configuration.",
    },
    {
      title: "Risky header example (alg: none) — for learning only",
      input:
        "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJhdHRhY2tlciIsImFkbWluIjp0cnVlfQ.",
      description:
        "Inspect alg=none in the header (never accept 'none' during verification in production).",
    },
    {
      title: "OIDC ID token payload (profile claims)",
      input:
        "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKb2huIERvZSIsInBpY3R1cmUiOiJodHRwczovL2V4YW1wbGUuY29tL3Bob3RvLmpwZyJ9.signature",
      description:
        "Verify identity fields like email/email_verified/name when debugging login flows.",
    },
    {
      title: "JWE hint: token that won’t decode like a JWT (5 parts)",
      input:
        "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00ifQ.eyJraWQiOiJrZXkxIn0.ZXhhbXBsZQ.encryptedPayload.tag",
      description:
        "If the token has 5 dot-separated parts, it may be a JWE (encrypted). Decoding claims requires decryption keys, not just Base64URL parsing.",
    },
  ],

  faq: [
    {
      question: "What is a JWT (JSON Web Token)?",
      answer:
        "A JWT is a compact token format used for authentication and authorization. It typically contains three dot-separated parts: header, payload (claims), and signature.",
    },
    {
      question: "How do I decode a JWT token to debug 401 errors?",
      answer:
        "Decode the token and check exp (expired), nbf (not active yet), iss (issuer mismatch), aud (audience mismatch), and whether required claims are missing. These are common causes of 401.",
    },
    {
      question: "How do I debug 403 Forbidden with a JWT?",
      answer:
        "403 usually means the token is valid but lacks permissions. Inspect scope/scp, roles, permissions, and custom authorization claims to see why access was denied.",
    },
    {
      question: "Does this JWT decoder verify the signature?",
      answer:
        "No. This tool decodes and displays the header/payload only. Signature verification must be done server-side using the correct secret/public key and a strict allowlist of algorithms.",
    },
    {
      question: "What do exp, iat, and nbf mean in a JWT?",
      answer:
        "exp is expiration time, iat is issued-at time, and nbf is not-before time. They’re usually Unix timestamps that define when a token is valid.",
    },
    {
      question: "What are iss and aud and why do they matter?",
      answer:
        "iss (issuer) identifies who issued the token; aud (audience) identifies who the token is intended for. Backends commonly reject tokens when iss/aud don’t match expected values.",
    },
    {
      question: "What’s the difference between an OAuth2 access token and an OIDC ID token?",
      answer:
        "Access tokens are for API authorization (often include scopes/permissions). ID tokens represent user identity for the client app (often include profile claims like email/name).",
    },
    {
      question: "Is it safe to paste a production JWT into an online decoder?",
      answer:
        "This decoder runs locally in your browser and doesn’t send tokens to a server. Still, treat JWTs as sensitive: don’t share real tokens in screenshots or public tickets.",
    },
    {
      question: "Why is 'alg: none' considered dangerous?",
      answer:
        "'none' means no signature. If a backend mistakenly accepts it, attackers can forge tokens. Always restrict allowed algorithms during verification.",
    },
    {
      question: "Why does my token fail to decode or look corrupted?",
      answer:
        "Common causes: the token isn’t three segments, whitespace/newlines were inserted, it’s an opaque token (not JWT), or it’s a JWE (encrypted token with five segments).",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "json-formatter",
    "url-encode-decode",
    "hash-generator",
    "uuid-generator",
    "password-generator",
  ],

  ui: {
    inputPlaceholder: "Paste your JWT (header.payload.signature)…",
    outputPlaceholder: "Decoded header and payload JSON will appear here…",
    inputLabel: "JWT Token",
    outputLabel: "Decoded JWT",
    convertLabel: "Decode JWT",
  },
}
