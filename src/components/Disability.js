import React, { Component } from "react";
import un from "../assets/un.jpg";
import "./styles/Jiaxi.css";

class Disability extends Component {
  state = {};
  render() {
    return (
      <div className="card-disability">
        <div className="container-jiaxi">
          <div>
            <h1>Disability</h1>
            <p>
              The Convention on the Rights of Persons with Disabilities, adopted
              at the UN in 2006, reaffirms that anyone with a disability should
              be treated with human dignity and be included in the enjoyment of
              fundamental human rights. Disability rights have be- come
              emblematic of how technological development increases the risk to
              vulnerable groups. They also present a clear opportunity to
              enhance human rights. The conven- tion has been signed by 161
              countries and ratified by 177 countries; it reaffirms rights such
              as nondiscrimination and establishes principles like universal
              design and ac- cessibility of communications.52 With the backing
              of international human rights, coun- try-specific regulation,
              industry standards, and guidance (or pressure) from disability
              rights activists, AI developers could mitigate the risk of AI’s
              disparate impacts on people with disabilities at the design stage
              rather than after deployment.
            </p>
            <p>
              In a 2018 report on new technologies and AI, the Australian Human
              Rights Commis- sion identified lack of accessibility as a
              fundamental concern.53 The report observes that almost one in five
              Australians live with a disability and argues that these citizens’
              rights are protected under international human rights law and the
              Convention on the Rights of Persons with Disabilities, which the
              government of Australia ratified, along with related national
              laws. The commission lays out a plan that leverages international
              human rights law, Australian law, nonbinding guidelines,
              compliance frameworks, ac- cessibility models, and necessary
              stakeholder consultations to address the issue.
            </p>
            <p>
              The Convention on Disabilities was partly inspired by the American
              Disabilities Act (ADA).55 A law backed by US enforcement
              mechanisms, the ADA has become influen- tial for tech industries.
              Apple, for example, has become a market leader in accessibly
              features such as automated programs that verbalize on-screen
              content for the blind.
            </p>
            <p>
              Yet other companies, such as Netflix, did not automatically comply
              with the ADA sim- ply because it became law. It took years of
              advocacy and public pressure from disabil- ity rights groups and a
              lawsuit by the National Association for the Deaf to force Netflix
              to make its platform accessible by adding closed captioning to its
              online videos. The industry has also been motivated to change its
              policies on accessible design because of structured negotiations,
              a method of dispute resolution between advocates and companies,
              rather than lawsuits.This underscores a broader point: Applying
              human rights to AI governance on an international level entails
              more than law and regulation. Change needs to come from additional
              forces, including market incentives, public awareness, local
              activism, and the technological innovation that would make compli-
              ance easier.
            </p>
            <p>
              This precedent illustrates how AI companies and developers can use
              an inherent respect of human dignity and human rights to act on
              anticipated harms. By proactively addressing negative impacts, as
              in the case of accessibility for people with disabilities,
              developers can take steps to advance human rights. In a similar
              way, those working on AI can look at any number of human rights
              issues to anticipate both social risks and benefits—rights like
              health and education or issues like migration or the protection of
              marginalized groups in conflict zones like Myanmar. This only
              scratches the surface of how human rights can be applied to AI
              systems.
            </p>
            <p>
              Yet fully integrating a human rights approach to building and
              maintaining AI systems would require change in tech industry
              culture and organizations. For example, we would need to see human
              rights integrated into product and design teams, not just in
              statements of corporate social responsibility. Human rights values
              would need to be infused into the workflow of the organization as
              part of the jobs of employees working on quality assurance, test
              suites, and product design documentation. Those working on
              disability rights have made great progress – at least at some of
              the big tech com- panies – and this can be a model for how to work
              with other kinds of rights.
            </p>
          </div>
          <div>
            <img src={un} alt="" width="490px"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Disability;
