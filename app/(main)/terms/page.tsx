'use client'

import Markdown from '@/components/markdown'

export default function Terms() {
  return <div className="max-w-screen-lg container mx-auto py-8">
    <Markdown content={`# Terms of Service

## Introduction

Welcome to Agent Foundry. Agent Foundry is a platform that allows you to create and install LLM agents that can automate other apps using APIs. By using our services, you agree to these Terms of Service ("Terms"). Please read them carefully.

## Acceptance of Terms

By accessing or using Agent Foundry, you agree to comply with and be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.

## Services

Agent Foundry provides a platform for creating and installing LLM agents to automate applications via APIs. Our service utilizes Anthropic models for AI and Google for OAuth authentication.

## API Keys and Credits

To use Agent Foundry, you will need an API key from Anthropic unless you opt to pay for credits. You are responsible for maintaining the confidentiality of your API key and for any activities or actions under your API key.

## Open-Source and Licensing

Agent Foundry is an open-source platform licensed under the MIT License.

## Data Privacy and Security

We prioritize the security of your credentials. All credentials are encrypted safely to ensure your data is protected.

## Compliance with Laws

You agree to comply with all applicable laws and regulations while using our services.

## Changes to Terms

We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.

## Termination

We reserve the right to terminate or suspend your access to our services at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

## Contact Information

For support, please reach out through the project's support channels.

## Governing Law

These Terms shall be governed and construed in accordance with applicable law, without regard to its conflict of law provisions.

## Disclaimer of Warranties

The services are provided "as is" and "as available" without any warranties of any kind, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

## Limitation of Liability

In no event shall Agent Foundry, its affiliates, agents, directors, employees, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.

By using Agent Foundry, you acknowledge that you have read, understood, and agree to be bound by these Terms.`} />
  </div>
}
