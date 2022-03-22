import { ListItem, Pane, Strong } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Heading, Paragraph, UnorderedList } from '@components/typography'
import { Card } from '@components/layout'
import { MetaTags } from '@components/utility'

/**
 * Renders the 'terms' page, describing the terms of use of
 * the application.
 */
export const Terms = () => {
  const { t } = useTranslation('pages-terms')

  return (
    <Pane display="flex">
      <MetaTags description={t('meta_description')} title={t('page_title')} />

      <Card title={t('page_heading')}>
        <Heading>Definitions</Heading>

        <Paragraph>For the purposes of these Terms of Use:</Paragraph>

        <UnorderedList>
          <ListItem>
            <Strong>Country</Strong> refers to: Japan
          </ListItem>
          <ListItem>
            <Strong>Company</Strong> (referred to as either &quot;the
            Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
            this Agreement) refers to string.is.
          </ListItem>
          <ListItem>
            <Strong>Device</Strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </ListItem>
          <ListItem>
            <Strong>Service</Strong> refers to the{' '}
            <a href="https://string.is/" rel="external nofollow noopener">
              string.is
            </a>{' '}
            Website.
          </ListItem>
          <ListItem>
            <Strong>Terms of Use</Strong> (also referred as &quot;Terms&quot;)
            mean these Terms of Use that form the entire agreement between You
            and the Company regarding the use of the Service.
          </ListItem>
          <ListItem>
            <Strong>You</Strong> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </ListItem>
        </UnorderedList>

        <Heading>Acknowledgment</Heading>

        <Paragraph>
          These are the Terms of Use governing the use of this Service and the
          agreement that operates between You and the Company. These Terms of
          Use set out the rights and obligations of all users regarding the use
          of the Service.
        </Paragraph>

        <Paragraph>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms of Use. These Terms of
          Use apply to all visitors, users and others who access or use the
          Service.
        </Paragraph>

        <Paragraph>
          By accessing or using the Service You agree to be bound by these Terms
          of Use. If You disagree with any part of these Terms of Use then You
          may not access the Service.
        </Paragraph>

        <Paragraph>
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </Paragraph>

        <Paragraph>
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Service and tells You about Your privacy rights and how the
          law protects You. Please read Our Privacy Policy carefully before
          using Our Service.
        </Paragraph>

        <Heading>Links to Other Websites</Heading>

        <Paragraph>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company.
        </Paragraph>

        <Paragraph>
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party web
          sites or services. You further acknowledge and agree that the Company
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          the use of or reliance on any such content, goods or services
          available on or through any such web sites or services.
        </Paragraph>

        <Paragraph>
          We strongly advise You to read the terms of use and privacy policies
          of any third-party web sites or services that You visit.
        </Paragraph>

        <Heading>Termination</Heading>

        <Paragraph>
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms of Use.
        </Paragraph>

        <Paragraph>
          Upon termination, Your right to use the Service will cease
          immediately.
        </Paragraph>

        <Heading>Limitation of Liability</Heading>

        <Paragraph>
          Notwithstanding any damages that You might incur, the entire liability
          of the Company under any provision of these Terms and Your exclusive
          remedy for all of the foregoing shall be limited to $1 USD.
        </Paragraph>

        <Paragraph>
          To the maximum extent permitted by applicable law, in no event shall
          the Company be liable for any special, incidental, indirect, or
          consequential damages whatsoever (including, but not limited to,
          damages for loss of profits, loss of data or other information, for
          business interruption, for personal injury, loss of privacy arising
          out of or in any way related to the use of or inability to use the
          Service, third-party software and/or third-party hardware used with
          the Service, or otherwise in connection with any provision of these
          Terms), even if the Company has been advised of the possibility of
          such damages and even if the remedy fails of its essential purpose.
        </Paragraph>

        <Paragraph>
          Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party&rsquo;s liability will be limited to the greatest
          extent permitted by law.
        </Paragraph>

        <Heading>
          &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
        </Heading>

        <Paragraph>
          The Service is provided to You &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; and with all faults and defects without warranty of
          any kind. To the maximum extent permitted under applicable law, the
          Company, on its own behalf and on behalf of its Affiliates and its and
          their respective licensors and service providers, expressly disclaims
          all warranties, whether express, implied, statutory or otherwise, with
          respect to the Service, including all implied warranties of
          merchantability, fitness for a particular purpose, title and
          non-infringement, and warranties that may arise out of course of
          dealing, course of performance, usage or trade practice. Without
          limitation to the foregoing, the Company provides no warranty or
          undertaking, and makes no representation of any kind that the Service
          will meet Your requirements, achieve any intended results, be
          compatible or work with any other software, applications, systems or
          services, operate without interruption, meet any performance or
          reliability standards or be error free or that any errors or defects
          can or will be corrected.
        </Paragraph>

        <Paragraph>
          Without limiting the foregoing, neither the Company nor any of the
          company&rsquo;s provider makes any representation or warranty of any
          kind, express or implied: (i) as to the operation or availability of
          the Service, or the information, content, and materials or products
          included thereon; (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability, or currency of any
          information or content provided through the Service; or (iv) that the
          Service, its servers, the content, or e-mails sent from or on behalf
          of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.
        </Paragraph>

        <Paragraph>
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
        </Paragraph>

        <Heading>Governing Law</Heading>

        <Paragraph>
          The laws of the Country, excluding its conflicts of law rules, shall
          govern these Terms and Your use of the Service. Your use of the
          Application may also be subject to other local, state, national, or
          international laws.
        </Paragraph>

        <Heading>Disputes Resolution</Heading>

        <Paragraph>
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </Paragraph>

        <Heading>For European Union (EU) Users</Heading>

        <Paragraph>
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which you are
          resident in.
        </Paragraph>

        <Heading>United States Legal Compliance</Heading>

        <Paragraph>
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo, or that has
          been designated by the United States government as a &quot;terrorist
          supporting&quot; country, and (ii) You are not listed on any United
          States government list of prohibited or restricted parties.
        </Paragraph>

        <Heading>Severability</Heading>

        <Paragraph>
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to accomplish
          the objectives of such provision to the greatest extent possible under
          applicable law and the remaining provisions will continue in full
          force and effect.
        </Paragraph>

        <Heading>Waiver</Heading>

        <Paragraph>
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation under these Terms shall not
          effect a party&rsquo;s ability to exercise such right or require such
          performance at any time thereafter nor shall be the waiver of a breach
          constitute a waiver of any subsequent breach.
        </Paragraph>

        <Heading>Translation Interpretation</Heading>

        <Paragraph>
          These Terms of Use may have been translated if We have made them
          available to You on our Service. You agree that the original English
          text shall prevail in the case of a dispute.
        </Paragraph>

        <Heading>Changes to These Terms of Use</Heading>

        <Paragraph>
          We reserve the right, at Our sole discretion, to modify or replace
          these Terms at any time. If a revision is material We will make
          reasonable efforts to provide at least 30 days&rsquo; notice prior to
          any new terms taking effect. What constitutes a material change will
          be determined at Our sole discretion.
        </Paragraph>

        <Paragraph>
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or in part, please stop using
          the website and the Service.
        </Paragraph>
      </Card>
    </Pane>
  )
}
