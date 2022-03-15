import React from "react";
import { List } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as S from "./layoutStyling";

function Portfolio({ closePortfolio, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Portfolio.txt"}
      closeModal={closePortfolio}
      height="100%"
      icon={<Explorer103 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closePortfolio}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <div class="text-content">
            <h1>Short Portfolio</h1>
            <p>
              This is a shortened, non-visual version of my portfolio without
              detailed information on any of the projects to give you a context
              of what I have been working on lately. If you are interested in
              seeing any of the work I have done, please contact me for a visual
              portfolio as well.
            </p>
            <hr />
            <h2>Sokos beauty webstore</h2>
            <h3>SOK Design</h3>
            <span>Role: UX Designer</span>
            <p>
              <h4>Background</h4>
              During my post as a designer for <a href="sokos.fi">Sokos</a>, I
              was in charge of designing the whole UI for a new ecommerce
              platform. This meant building a component library and whole UI
              design from the ground up; defining and creating the color models,
              typography rules, baseline grid, layout guidelines, variants and
              statuses as well as UX models. The old platform had met the end of
              its life cycle and thus, a new platform was custom-made.
              <h4>Solution</h4>
              After building a visual identity for the new platform, countless
              Figma prototypes later, the goal was to create a beta store. In
              the development of the beta store I positioned myself in several
              roles. In close cooperation with the front and back-end devs we
              started to add more layers onto the foundation built before. Using
              a design system, for which I had built a theme using Typescript,
              we aimed to scale the development and design to a more aligned
              model. From user tests we concluded UX improvements that were done
              as part of development. Alongside the ecommerce platform, one
              project that is worth mentioning is the development of SOK Design
              System. A rewarding experience in it was kickstarting work
              regarding a consistent iconography with designers from several
              parts of the organisation.
            </p>
            <hr />
            <h2>Website redesign & development</h2>
            <h3>Solidabis</h3>
            <span>Role: Designer/Developer</span>
            <p>
              <h4>Background</h4>
              The Wordpress-based website of Solidabis Solutions Oy had been
              deprecated style-wise and technically, using a theme that did not
              serve the users (editors) and viewers (potential customers,
              existing customers) well. Bulky and heavy font selections,
              unreadable texts, alignment issues and heavy load times were
              dragging the user experience. Moreover, a few vulnerabilities in
              the the theme had caused an issue for potential blacklisting of
              IP:s for frequent visitors.
              <h4>Solution</h4>
              As a solution, I redesigned the website entirely, using a
              Wordpress framework (Genesis) for which I developed a child theme,
              to align with the new styles and to give a brighter, more current
              look for the website. I redeveloped the website using PHP with
              basic HTML5 and CSS/SASS to stylize the website. After that, I
              designed and created new content for the website, including some
              iconography, plenty of copywriting and photography.
            </p>
            <hr />
            <h2>Accessibility audit</h2>
            <h3>Ruskeat tytöt</h3>
            <span>Role: Accessibility expert (pro bono)</span>
            <p>
              <h4>Background</h4>
              Ruskeat Tytöt Media was updating their website and I offered to
              help them out pro bono to respond to accessibility issues and
              identify possible solutions to existing problems. Ruskeat Tytöt
              Media is an independent online publication committed to centering
              and normalizing the perspectives of Brown women and people with
              underrepresented genders in Finnish and Nordic media. Ruskeat
              Tytöt Media is Finland’s first culture media [and writing academy]
              for Brown Girls by Brown Girls.
              <h4>Solution</h4>
              Using the WCAG 2.1 guidelines, I audited the website during and
              after development, during which I drafted guidelines for how to
              solve problems with accessibility. As a deliverable, I also
              provided an accessibility report, found on their website.
            </p>
            <hr />
            <h2>Maintenance website</h2>
            <h3>
              Patentti- ja rekisterihallitus / Finnish Patent and Registration
              Office Helsinki, Finland
            </h3>
            <span>Role: UI Designer & Developer</span>
            <p>
              <h4>Background</h4>
              The Finnish Patent and Registration Office (PRH) needed a website
              that would go online in the case of a service outage, maintenance
              break or any other unexpected event. The website would need to
              have three pages in Finnish, English and Swedish: front page, a
              list of unaffected services and contact information page, editable
              in Dreamweaver. The goal is to portray a message, that the service
              outage is temporary and will be fixed as soon as possible.
              <h4>Solution</h4>
              Using custom Bootstrap styling from the other project I had
              developed for PRH, I designed the page entity that responded to
              the aforementioned challenges. The page entity was a Bootstrap
              4-powered website that would be customizable by the PRH
              communications department. I designed the elements and outlined
              the page which then complemented the style guide as an example
              page as well.
            </p>
            <hr />
            <h2>Edunsaaja-apuri accessibility fixes</h2>
            <h3>
              Patentti- ja rekisterihallitus / Finnish Patent and Registration
              Office Helsinki, Finland
            </h3>
            <span>Role: UI Designer & Developer</span>
            <p>
              <h4>Background</h4>
              Edunsaaja-apuri can be used to determine if an entity is entitled
              to benefits or required for providing extra information. After an
              accessibility audit, some fixes needed to be done to make the
              website accessible and WCAG 2.1 compliant.
              <h4>Solution</h4>
              Using WCAG guidelines and the audit, I fixed the accessibility
              errors and problems with the website which was done with
              JavaScript and HTML5&CSS. Most of the work was only code.
            </p>
            <hr />
            <h2>Auditor search service</h2>
            <h3>
              Patentti- ja rekisterihallitus / Finnish Patent and Registration
              Office Helsinki, Finland
            </h3>
            <span>Role: UX&UI Designer</span>
            <p>
              <h4>Background</h4>
              The Auditor Oversight business unit of PRH had tendered out the
              redevelopment of their digital services to Gofore, a Finnish
              digital consultancy. However, the bid didn’t include any designers
              but only process and software developers. As the only designer
              present in the redevelopment processes, I took it upon myself to
              ensure that the solutions were usable, accessible and responded to
              business demands.
              <h4>Solution</h4>
              The Auditor search service was done in React with Bootstrap and
              custom styling I had started to redevelop on another project. It
              reflected on a developing style guide and provided ideas for
              improvement for the design system as well.
            </p>
            <hr />
            <h2>Official PDF-document templates</h2>
            <h3>
              Patentti- ja rekisterihallitus / Finnish Patent and Registration
              Office Helsinki, Finland
            </h3>
            <span>Role: Designer</span>
            <p>
              <h4>Background</h4>
              The Finnish Patent and Registration Office (PRH) didn’t have an
              official document model that was used on digitally-generated
              documents. The documents followed a simple automatically generated
              format, meaning that they were unaccessible, unrecognizable and
              subject to fraud. The documents would have to reflect PRH and
              their documents’ official nature throughout their services from
              receipts to registrations and patents.
              <h4>Solution</h4>
              Together with another designer we designed a variety of document
              templates that we tested in workshops internally in each business
              unit that would be using the model. After, we modified the
              documents to respond to workshop feedback, made the documents
              accessible to screen readers and clarified the font usage and
              header levels, which were then delivered to the technical team as
              templates and instructions.
            </p>
            <hr />
            <h2>
              Design System - Bootstrap 4 -styles, StorybookJS, Sketch-library
            </h2>
            <h3>
              Patentti- ja rekisterihallitus / Finnish Patent and Registration
              Office Helsinki, Finland
            </h3>
            <span>Role: UI Designer & Developer</span>
            <p>
              <h4>Background</h4>
              The Finnish Patent and Registration Office (PRH) partnered with us
              to maintain, redevelop and redesign their custom
              Bootstrap-styling. PRH didn’t own a systematic way of presenting
              the styles nor instructing contractors and in-house developers how
              to use the styles, especially with accessibility in mind. The
              custom Bootstrap-styles had previously been developed by several
              contractors, based on Bootstrap 3 and used widely on a variety of
              digital services.
              <h4>Solution</h4>I suggested building a component library for
              developers and other stakeholders to use in their daily work on an
              open-source platform (Storybook). As part of the development, I
              redesiged the styling, fixed accessibility issues, created code
              snippets and documented each component individually and maintained
              the whole component library into an npm package. I developed the
              styleguide on JavaScript and matched it with a Sketch-library from
              scratch to support designers; a starting point of a design system
              for PRH.
            </p>
            <hr />
            <h2>Brand & Communications Guidelines</h2>
            <h3>Solidabis Oy</h3>
            <span>Role: Designer</span>
            <p>
              <h4>Background</h4>
              Solidabis is a growing software development company that has had a
              variety of structural and cultural changes in its history since
              the founding in 2016. The changes have led to the company not
              having clear and concise image to potential clients, future
              employees or the media. Logos and colors are not properly defined
              and mixed versions of the logos are circulating around in
              workspaces.
              <h4>Solution</h4>I developed brand and visual styleguide to help
              everyone in their daily client work. It includes the correct color
              codes, tone of voice, samples of text and imagery as well as
              proper logo usage. I designed document templates for Word and
              PowerPoint as well as other brand assets, such as an icon and font
              bank, Adobe CC color package, social media hashtags and automated
              marketing campaigns.
            </p>
            <hr />
            <h2>Designer on various projects</h2>
            <h3>IBM</h3>
            <span>Role: UX Designer</span>
            <p>
              <h4>Background</h4>
              Due to strict confidentiality and the intellectual property laws
              implemented in the contract signed with IBM, I am not allowed to
              present my work to outside parties nor discuss the clients I have
              worked with. A few of the Finnish clients which have publicly
              promoted IBM’s cooperation, such as Finnair and Nokia, are just
              some of the clients for which I worked for as a designer.
              <h4>Focus</h4>All of the work I did at IBM was
              enterprise-centered, focusing on enterprise-level users and
              employee experience rather than customer and commercial. Most
              design work had to do with Watson AI-powered chatbots for IBM’s
              clients. My tasks varied from leading workshops, to user
              interviews and tests, to collaboratively working with data
              scientists, developers and product owners on a daily basis.
            </p>
            <hr />
            <h2>University of Helsinki Metro Station Visual Outlook</h2>
            <h3>HKL - Helsinki City Transportation</h3>
            <span>Role: Visual Designer</span>
            <p>
              <h4>Background</h4>
              Helsinki City Transport HKL organized an open call for artworks
              for all the metro stations in the Helsinki branch. Participation
              was anonymous and the submissions would be judged based on the
              artistic value and historical implications as well as
              timelessness. Together with a good friend of mine,{" "}
              <a href="http://misaelrojas.com/">Misael Rojas</a>, we submitted
              an artwork for the University of Helsinki metro station, which is
              one of the three busiest metro stations in Helsinki due to its
              location near the governmental, private enterprise hubs.
              <h4>Outcome</h4>The design takes into account the historical
              nature of the station, being the last one to be completed in
              Helsinki in the late 90s. Neon lights and tile patterns complement
              the station’s spirit. We took nearly 300 images from which we
              vectorized shapes from iconic buildings around the station. It
              gives the daily user of the metro station something new to look
              for and spot in their surroundings during their daily routines.
            </p>
            <hr />
            <h2>#Olotila Street Art Collaborative Installation</h2>
            <h3>City of Helsinki Urban Environment Division</h3>
            <span>Role: Producer / Curator</span>
            <p>
              <h4>Background</h4>
              In 2018 I worked as a Communications Intern at the City of
              Helsinki Urban Environment Division. During the summer I noticed
              the largest construction site of Central Library Oodi being
              surrounded by light green wooden walls. In front of the Finnish
              Parliament, it is the most central site in Helsinki. I gathered
              funding and organized to get artists from womens’ collective
              Mimmit Peinttaa to cover these walls with art and stories.
              <h4>Outcome</h4>The walls were painted in early September. I made
              and designed the promotional texts and logos in stencil form for
              the city and companies. The works have appeared in many
              publications such as Helsingin Sanomat and several Instagram
              accounts.
            </p>
          </div>
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default Portfolio;
