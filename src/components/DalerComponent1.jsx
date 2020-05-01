import React from 'react';
import './styles/DalerComponent1.css';

const DalerComponent1 = () => {
    return (
        <div>
            <section className="wrapper1">
                <div className="container">
                    <hr />
                    <h2 className="title">Privacy</h2>
                    <p>
                        Privacy has long been a major concern for a broad field that includes government, business, academia, and civil society organizations. For example, there has been a surge in interest from developers and engineers to follow privacy-by-design36 principles, which demonstrate how norms can be incorporated at the systems-design level.
                        Conducting a privacy impact assessment for technological deployments is an established tool for privacy compliance. Yet we already see tensions around the human right to privacy and AI development.
                        </p>
                    <p>
                        For instance, Stanford University researchers trained a deep neural network to “predict” the sexual orientation of their subjects, without obtaining consent, using a set of images collected from online dating websites.37 Beyond various methodological shortcomings, the research demonstrated how a disregard for privacy rights increases the risks of algorithmic surveillance, where data that is collected and analyzed threatens to reveal personal information about users. This can put individuals and groups at risk,
                        particularly those living under regimes that would use such information to repress and discriminate.38
                        </p>

                    <p className="quote">
                        IF AI DEVELOPERS TREAT PRIVACY NOT AS AN ETHICAL PREFERENCE BUT AS A FUNDAMENTAL HUMAN RIGHT, IT WOULD STRENGTHEN THE PRIVACY CONSIDERATIONS THAT ALREADY EXIST IN INDUSTRY NORMS AND TECHNICAL STANDARDS.
                    </p>

                </div>
            </section>

            <section className="wrapper2">
                <div className="container">
                    <h2 className="title">Privacy</h2>
                    <p>
                        Another example is Amazon’s AI-powered facial recognition software, which was made widely available in 2016. In July 2018, American Civil Liberties Union (ACLU) researchers ran an experiment matching pictures of all 535 members of Congress to a database of 25,000 public images of arrested individuals. Researchers found that the software not only produced 28 false matches but was also racially biased. Since Amazon has sold this
                        software to police departments, the ACLU expressed concern about further use of facial recognition for government surveillance, which is pervasive, opaque, and unregulated.39
                    </p>
                    <p>
                        If AI developers treat privacy as a fundamental human right rather than an ethical preference, the privacy considerations that already exist in industry norms and technical standards would be stronger.40 The right to privacy is found in Article 12 of the Universal Declaration, Article 17 of the ICCPR, and in a number of other human rights documents, national constitutions, and national laws.41
                    </p>
                    <p>
                        International human rights law and principles around privacy can help AI developers analyze, identify, and respond to emerging risks. The AI capabilities demonstrated by the Stanford study give a glimpse into how AI can threaten privacy: both through the rampant collection of data and the capacity for de-anonymizing subjects. These concerns have recently been documented in a report by human rights organizations Article 19 and Privacy International, which notes that “AI-driven consumer products . . .
                        are frequently equipped with sensors that generate and collect vast amounts of data without the knowledge or consent of those in its proximity.”42 The report states that AI can be used to infer sensitive facts from relatively mundane data, learning about people’s emotional states, health, politics, and others from data like location histories and social media interactions.43 Protecting the right to privacy is key to the enjoyment
                        of a number of related rights, such as freedoms of expression, association, political participation, and information.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default DalerComponent1;