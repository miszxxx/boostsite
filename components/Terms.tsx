import React from "react";

const Terms = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <div className="py-20 space-y-8 relative">
        <div className="space-y-3">
          <div className="text-sm font-semibold tracking-[0.2em] text-purple-400 uppercase">
            Terms of Service
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-transparent" />
          <span className="text-sm font-medium text-muted-foreground/90 whitespace-nowrap">
            Last Updated: April 5, 2024
          </span>
          <div className="h-[1px] w-12 bg-purple-500/20" />
        </div>
      </div>

      <div className="space-y-16 relative">
        {/* Introduction */}
        <Section>
          <p className="text-lg text-muted-foreground/90 leading-relaxed">
            By utilizing our services or products, you agree to comply with these Terms of Service. 
            We recommend reviewing these terms thoroughly to ensure complete understanding.
          </p>
        </Section>

        {/* Commitments */}
        <Section>
          <SectionTitle>Our Commitments</SectionTitle>
          <List>
            <ListItem>
              Delivery completion within 1-48 hours, subject to technical feasibility
            </ListItem>
            <ListItem>
              Strict adherence to legal data retention policies
            </ListItem>
            <ListItem>
              Guaranteed compliance with platform standards, ensuring safe usage without risk of sanctions
            </ListItem>
          </List>
        </Section>

        {/* Server Boosting */}
        <Section>
          <SectionTitle>Server Boosting</SectionTitle>
          <List>
            <ListItem>
              3-Month boosts duration: 85-91 days<br />
              1-Month boosts duration: 25-31 days
            </ListItem>
            <ListItem>
              Disable anti-raid systems and bots before boost application
            </ListItem>
            <ListItem>
              No refunds for account removals due to server security measures
            </ListItem>
            <ListItem>
              Boosts cannot be transferred between servers
            </ListItem>
            <ListItem>
              Service interruptions due to platform actions are beyond our control
            </ListItem>
          </List>
        </Section>

        {/* Nitro Tokens */}
        <Section>
          <SectionTitle>Nitro Tokens</SectionTitle>
          <List>
            <ListItem>
              All tokens pre-validated; no warranty for post-purchase invalidation
            </ListItem>
            <ListItem>
              CAPTCHA-free status cannot be guaranteed
            </ListItem>
            <ListItem>
              Tokens intended for server boosting only; not for personal account use
            </ListItem>
            <ListItem>
              Platform-initiated terminations are not eligible for compensation
            </ListItem>
            <ListItem>
              1-Month tokens valid for 25-31 days
            </ListItem>
          </List>
        </Section>

        {/* Tools & Bots */}
        <Section>
          <SectionTitle>Tools & Bots</SectionTitle>
          <List>
            <ListItem>
              Updates provided when possible; no guarantees for patched services
            </ListItem>
            <ListItem>
              No compensation for security compromises
            </ListItem>
            <ListItem>
              We reserve the right to terminate services; "lifetime" refers to active platform duration
            </ListItem>
            <ListItem>
              License resale requires explicit authorization
            </ListItem>
          </List>
        </Section>

        {/* Privacy */}
        <Section>
          <SectionTitle>Privacy Policy</SectionTitle>
          <List>
            <ListItem>
              Data collection limited to essential platform requirements
            </ListItem>
          </List>
        </Section>

        {/* Refunds */}
        <Section>
          <SectionTitle>Refund & Replacement Policy</SectionTitle>
          <List>
            <ListItem>
              Refunds limited to service errors or delivery failures
            </ListItem>
            <ListItem>
              Delayed orders eligible for refund
            </ListItem>
            <ListItem>
              Unauthorized payment reversals result in permanent service restriction
            </ListItem>
          </List>
        </Section>

        {/* Disclaimer */}
        <Section>
          <p className="text-sm text-muted-foreground/60 italic">
            Disclaimer: This website is not affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries.
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ children }) => (
  <div className="space-y-6">{children}</div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
    {children}
  </h2>
);

const List = ({ children }) => (
  <div className="space-y-4">{children}</div>
);

const ListItem = ({ children }) => (
  <div className="flex gap-4 items-start">
    <div className="mt-2">
      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
    </div>
    <div className="text-muted-foreground/90 leading-relaxed flex-1">
      {children}
    </div>
  </div>
);

export default Terms;