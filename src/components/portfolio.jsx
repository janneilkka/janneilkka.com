import React from "react";
import { TitleBar, Cursor } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as S from "./layoutStyling";

function Portfolio({ closePortfolio }) {
  return (
    <S.styledModal
      title="Portfolio.txt"
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closePortfolio} key="close" />,
      ]}
      height="100%"
      icon={<Explorer103 variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Short Portfolio</h1>
        <p>
          This is a shortened, non-visual version of my portfolio without
          detailed information on the projects I have been working on. If you
          are interested in seeing any of the work I have done in more detail,
          please contact me for a call and I'll present the learnings in more
          detail.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>B2C booking platform</h2>
        <h3>Anyhau Oy</h3>
        <span className="role">
          Role: Design lead, product owner, "scrum master", product manager
        </span>

        <h4>Background</h4>
        <p>
          Anyhau's aim is to build a new marketplace that unites pet owners and
          pet businesses. At the moment there is no well-functioning booking
          platform that caters specifically to pet businesses’ unique needs in
          comparison to, for example, beauty salons. All the while all pet
          businesses handle bookings in their own methods ranging from Google
          Calendar to whiteboards.
        </p>
        <h4>Solution</h4>
        <p>
          I ran daily routines of the startup (dailies, weeklies, demos,
          refinements, feedbacks etc.), seeing over the development work of the
          product, and kept stakeholders up to date on the progress. Meanwhile,
          I designed the platform's MVP, multiple visual assets as well as coded
          some of the frontend (such as a Material theme for the component
          library). During the process I kept in close contact with both
          business and consumer users to listen to their needs. During the time,
          I studied Basecamp's Shape Up-method which we implemented as our agile
          software development method with great learnings.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>The Voting Aid Machines</h2>
        <h3>Sanoma Media Finland</h3>
        <span className="role">Role: Lead Designer</span>

        <h4>Background</h4>
        <p>
          My main responsibility during my time at HS was to lead the design of
          the renewal of the voting aid machines (vaalikone in Finnish), that is
          used by Helsingin Sanomat, Ilta-Sanomat and Aamulehti as well as
          regional brands. The new voting aid machines needed to serve time
          well: use a consistent, well guided UX that is mainly used by younger
          audiences on mobile devices on the app or browser. Use cases would
          vary: from the urgent need for a candidate on the way to a voting site
          to browsing heavily months prior to elections.
        </p>
        <h4>Solution</h4>
        <p>
          From early on, the focus was on creating a platform that could last
          time well so we developed an in-house solution that had hints of
          gamification; tiny rewards for users to make filling the form as easy
          as possible. The voting aid machines consisted of three user
          interfaces: the candidate machine, voting aid machines to the voters
          and results service for election night. Design-wise the style was
          taken to monochromatic direction using as high contrasts as possible,
          giving homage to Nintendo-style gaming experience where user has a set
          of controls and where progress feels more like a game, rather than a
          set of questions. The main focus was on customization: making the use
          of voting aid machines as fast as possible when time is of the essence
          to being able to dig in as deep as possible and answering as many
          questions as user wants.
        </p>
        <p>
          As a nice bonus, the design won Bronze in the 45th annual creative
          competition in the Best of Database/Interface design category. The
          jury said the following: ”The judges praised the project for its
          accessible and mobile-friendly design, emphasizing its simplicity and
          elegance. They appreciated the effort put into making the wording easy
          to understand without compromising on depth.” In addition the app got
          an Award of Excellence from the jury in the Prod: New site, page, app
          or other product category.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Sokos eCommerce platform</h2>
        <h3>SOK Design</h3>
        <span className="role">Role: UX Designer</span>
        <h4>Background</h4>
        <p>
          During my post as a designer for Sokos, I was in charge of designing
          the whole UI for a new ecommerce platform. This meant building a
          component library and whole UI design from the ground up; defining and
          creating the color models, typography rules, baseline grid, layout
          guidelines, variants and statuses as well as UX models. The old
          platform had met the end of its life cycle and thus, a new platform
          was custom-made.
        </p>
        <h4>Solution</h4>
        <p>
          After building a visual identity for the new platform, countless Figma
          prototypes later, the goal was to create a beta store. In the
          development of the beta store I positioned myself in several roles. In
          close cooperation with the front and back-end devs we started to add
          more layers onto the foundation built before. Using a design system,
          for which I had built a theme using Typescript, we aimed to scale the
          development and design to a more aligned model. From user tests we
          concluded UX improvements that were done as part of development.
          Alongside the ecommerce platform, one project that is worth mentioning
          is the development of SOK Design System. A rewarding experience in it
          was kickstarting work regarding a consistent iconography with
          designers from several parts of the organisation.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Accessibility auditing</h2>
        <h3>
          National Land Survey of Finland (Maanmittauslaitos) & Patentti- ja
          rekisterihallitus / Finnish Patent and Registration Office Helsinki,
          Finland
        </h3>
        <span className="role">Role: Accessibility Specialist</span>

        <h4>Background</h4>
        <p>
          Both Finnish Patent and Registration Ofﬁce (PRH) and National Land
          Survey of Finland (MML) are public service providers in Finland,
          making them bound by the European Parliament’s Directive (EU)
          2016/2102. This means making sure their websites and mobile apps meet
          accessibility standards (WCAG) and their success criteria. The
          directive was enforced in phases, coming into full effect on 2021.
        </p>
        <h4>Solution</h4>
        <p>
          For PRH, I did a variety of accessibility related tasks from making
          component-level guidelines for developing services accessible, to
          fixing accessibility issues in their services in code-level. At MML I
          was a full-time accessibility auditor, manually testing their user
          interfaces using a variety of methods. I wrote accessibility reports
          and backlog tasks for both clients.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Website redesign & development</h2>
        <h3>Solidabis</h3>
        <span className="role">Role: Designer/Developer</span>

        <h4>Background</h4>
        <p>
          The Wordpress-based website of Solidabis Solutions Oy had been
          deprecated style-wise and technically, using a theme that did not
          serve the users (editors) and viewers (potential customers, existing
          customers) well. Bulky and heavy font selections, unreadable texts,
          alignment issues and heavy load times were dragging the user
          experience. Moreover, a few vulnerabilities in the the theme had
          caused an issue for potential blacklisting of IPs for frequent
          visitors.
        </p>
        <h4>Solution</h4>
        <p>
          As a solution, I redesigned the website entirely, using a Wordpress
          framework (Genesis) for which I developed a child theme, to align with
          the new styles and to give a brighter, more current look for the
          website. I redeveloped the website using PHP with basic HTML5 and
          CSS/SASS to stylize the website. After that, I designed and created
          new content for the website, including some iconography, plenty of
          copywriting and photography.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Accessibility audit</h2>
        <h3>Ruskeat tytöt</h3>
        <span className="role">Role: Accessibility expert (pro bono)</span>

        <h4>Background</h4>
        <p>
          Ruskeat Tytöt Media was updating their website and I offered to help
          them out pro bono to respond to accessibility issues and identify
          possible solutions to existing problems. Ruskeat Tytöt Media is an
          independent online publication committed to centering and normalizing
          the perspectives of Brown women and people with underrepresented
          genders in Finnish and Nordic media. Ruskeat Tytöt Media is Finland’s
          first culture media [and writing academy] for Brown Girls by Brown
          Girls.
        </p>
        <h4>Solution</h4>
        <p>
          Using the WCAG 2.1 guidelines, I audited the website during and after
          development, during which I drafted guidelines for how to solve
          problems with accessibility. As a deliverable, I also provided an
          accessibility report, found on their website.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Maintenance website</h2>
        <h3>
          Patentti- ja rekisterihallitus / Finnish Patent and Registration
          Office Helsinki, Finland
        </h3>
        <span className="role">Role: UI Designer & Developer</span>

        <h4>Background</h4>
        <p>
          The Finnish Patent and Registration Office (PRH) needed a website that
          would go online in the case of a service outage, maintenance break or
          any other unexpected event. The website would need to have three pages
          in Finnish, English and Swedish: front page, a list of unaffected
          services and contact information page, editable in Dreamweaver. The
          goal is to portray a message, that the service outage is temporary and
          will be fixed as soon as possible.
        </p>
        <h4>Solution</h4>
        <p>
          Using custom Bootstrap styling from the other project I had developed
          for PRH, I designed the page entity that responded to the
          aforementioned challenges. The page entity was a Bootstrap 4-powered
          website that would be customizable by the PRH communications
          department. I designed the elements and outlined the page which then
          complemented the style guide as an example page as well.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Edunsaaja-apuri accessibility fixes</h2>
        <h3>
          Patentti- ja rekisterihallitus / Finnish Patent and Registration
          Office Helsinki, Finland
        </h3>
        <span className="role">Role: UI Designer & Developer</span>

        <h4>Background</h4>
        <p>
          Edunsaaja-apuri can be used to determine if an entity is entitled to
          benefits or required for providing extra information. After an
          accessibility audit, some fixes needed to be done to make the website
          accessible and WCAG 2.1 compliant.
        </p>
        <h4>Solution</h4>
        <p>
          Using WCAG guidelines and the audit, I fixed the accessibility errors
          and problems with the website which was done with JavaScript and
          HTML5&CSS. Most of the work was only code.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Auditor search service</h2>
        <h3>
          Patentti- ja rekisterihallitus / Finnish Patent and Registration
          Office Helsinki, Finland
        </h3>
        <span className="role">Role: UX&UI Designer</span>

        <h4>Background</h4>
        <p>
          The Auditor Oversight business unit of PRH had tendered out the
          redevelopment of their digital services to Gofore, a Finnish digital
          consultancy. However, the bid didn’t include any designers but only
          process and software developers. As the only designer present in the
          redevelopment processes, I took it upon myself to ensure that the
          solutions were usable, accessible and responded to business demands.
        </p>
        <h4>Solution</h4>
        <p>
          The Auditor search service was done in React with Bootstrap and custom
          styling I had started to redevelop on another project. It reflected on
          a developing style guide and provided ideas for improvement for the
          design system as well.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Official PDF-document templates</h2>
        <h3>
          Patentti- ja rekisterihallitus / Finnish Patent and Registration
          Office Helsinki, Finland
        </h3>
        <span className="role">Role: Designer</span>

        <h4>Background</h4>
        <p>
          The Finnish Patent and Registration Office (PRH) didn’t have an
          official document model that was used on digitally-generated
          documents. The documents followed a simple automatically generated
          format, meaning that they were unaccessible, unrecognizable and
          subject to fraud. The documents would have to reflect PRH and their
          documents’ official nature throughout their services from receipts to
          registrations and patents.
        </p>
        <h4>Solution</h4>
        <p>
          Together with another designer we designed a variety of document
          templates that we tested in workshops internally in each business unit
          that would be using the model. After, we modified the documents to
          respond to workshop feedback, made the documents accessible to screen
          readers and clarified the font usage and header levels, which were
          then delivered to the technical team as templates and instructions.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>
          Design System - Bootstrap 4 -styles, StorybookJS, Sketch-library
        </h2>
        <h3>
          Patentti- ja rekisterihallitus / Finnish Patent and Registration
          Office Helsinki, Finland
        </h3>
        <span className="role">Role: UI Designer & Developer</span>

        <h4>Background</h4>
        <p>
          The Finnish Patent and Registration Office (PRH) partnered with us to
          maintain, redevelop and redesign their custom Bootstrap-styling. PRH
          didn’t own a systematic way of presenting the styles nor instructing
          contractors and in-house developers how to use the styles, especially
          with accessibility in mind. The custom Bootstrap-styles had previously
          been developed by several contractors, based on Bootstrap 3 and used
          widely on a variety of digital services.
        </p>
        <h4>Solution</h4>
        <p>
          I suggested building a component library for developers and other
          stakeholders to use in their daily work on an open-source platform
          (Storybook). As part of the development, I redesiged the styling,
          fixed accessibility issues, created code snippets and documented each
          component individually and maintained the whole component library into
          an npm package. I developed the styleguide on JavaScript and matched
          it with a Sketch-library from scratch to support designers; a starting
          point of a design system for PRH.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Brand & Communications Guidelines</h2>
        <h3>Solidabis Oy</h3>
        <span className="role">Role: Designer</span>

        <h4>Background</h4>
        <p>
          Solidabis is a growing software development company that has had a
          variety of structural and cultural changes in its history since the
          founding in 2016. The changes have led to the company not having clear
          and concise image to potential clients, future employees or the media.
          Logos and colors are not properly defined and mixed versions of the
          logos are circulating around in workspaces.
        </p>
        <h4>Solution</h4>
        <p>
          I developed brand and visual styleguide to help everyone in their
          daily client work. It includes the correct color codes, tone of voice,
          samples of text and imagery as well as proper logo usage. I designed
          document templates for Word and PowerPoint as well as other brand
          assets, such as an icon and font bank, Adobe CC color package, social
          media hashtags and automated marketing campaigns.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Designer on various projects</h2>
        <h3>IBM</h3>
        <span className="role">Role: UX Designer</span>

        <h4>Background</h4>
        <p>
          Due to strict confidentiality and the intellectual property laws
          implemented in the contract signed with IBM, I am not allowed to
          present my work to outside parties nor discuss the clients I have
          worked with. A few of the Finnish clients which have publicly promoted
          IBM’s cooperation, such as Finnair and Nokia, are just some of the
          clients for which I worked for as a designer.
        </p>
        <h4>Focus</h4>
        <p>
          All of the work I did at IBM was enterprise-centered, focusing on
          enterprise-level users and employee experience rather than customer
          and commercial. Most design work had to do with Watson AI-powered
          chatbots for IBM’s clients. My tasks varied from leading workshops, to
          user interviews and tests, to collaboratively working with data
          scientists, developers and product owners on a daily basis.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>University of Helsinki Metro Station Visual Outlook</h2>
        <h3>HKL - Helsinki City Transportation</h3>
        <span className="role">Role: Visual Designer</span>

        <h4>Background</h4>
        <p>
          Helsinki City Transport HKL organized an open call for artworks for
          all the metro stations in the Helsinki branch. Participation was
          anonymous and the submissions would be judged based on the artistic
          value and historical implications as well as timelessness. Together
          with a good friend of mine,{" "}
          <a
            className={Cursor.Pointer}
            href="http://misaelrojas.com/"
            target="_blank"
          >
            Misael Rojas
          </a>
          , we submitted an artwork for the University of Helsinki metro
          station, which is one of the three busiest metro stations in Helsinki
          due to its location near the governmental, private enterprise hubs.
        </p>
        <h4>Outcome</h4>
        <p>
          The design takes into account the historical nature of the station,
          being the last one to be completed in Helsinki in the late 90s. Neon
          lights and tile patterns complement the station’s spirit. We took
          nearly 300 images from which we vectorized shapes from iconic
          buildings around the station. It gives the daily user of the metro
          station something new to look for and spot in their surroundings
          during their daily routines.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>#Olotila Street Art Collaborative Installation</h2>
        <h3>City of Helsinki Urban Environment Division</h3>
        <span className="role">Role: Producer / Curator</span>
        <h4>Background</h4>
        <p>
          In 2018 I worked as a Communications Intern at the City of Helsinki
          Urban Environment Division. During the summer I noticed the largest
          construction site of Central Library Oodi being surrounded by light
          green wooden walls. In front of the Finnish Parliament, it is the most
          central site in Helsinki. I gathered funding and organized to get
          artists from womens’ collective Mimmit Peinttaa to cover these walls
          with art and stories.
        </p>
        <h4>Outcome</h4>
        <p>
          The walls were painted in early September. I made and designed the
          promotional texts and logos in stencil form for the city and
          companies. The works have appeared in many publications such as
          Helsingin Sanomat and several Instagram accounts.
        </p>
      </S.styledModalFrame>
    </S.styledModal>
  );
}

export default Portfolio;
