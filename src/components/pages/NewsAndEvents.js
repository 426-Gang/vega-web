import {Container, Row} from 'react-bootstrap';
import Header from '../UI/organisms/Header.js';
import Footer from '../UI/organisms/Footer.js';
import ListNewsDetails from '../UI/organisms/ListNewsDetails.js';
import BlogPageLayout from '../templates/BlogPageLayout.js';
const NewsAndEvents = (props) => {
	const listOfNews = [
		{	
			"date" : "9.8.21",
			"h1": "IG Design Group Selects Vega NextGen for Cybersecurity",
			"h2": "Vega protects global manufacturer, IG Design Group, from advanced threats and ransomware supply chain threats",
			"para" : [
				"AMSTERDAM – 8 September, 2021 – Vega, the leader in cloud-native network detection and response, today announced that IG Design Group in the Netherlands, a leading manufacturer of paper and products used to celebrate life's special occasions, selected Vega NextGen to help defend against advanced threats through complete visibility, real-time detection, and investigation across their IT environment. IG Design Group chose Vega as they needed a proactive solution which could detect suspicious activity quickly and provide visibility throughout its complex supply chain.",
				"We needed a network, detection and response solution in our Netherlands office to help support our IT department in their fight against today's escalating cybersecurity landscape. Vega's NextGen gives us an edge over advanced cyber threats, giving us confidence and peace of mind,\" said Eric Hisken, European Finance Director of IG Design Group. \"We have trust in Vega's ability to detect and respond to potential threats to our IT environments, ensuring that production isn't interrupted during our busy manufacturing schedule.",
				"IG Design Group in the Netherlands is a manufacturer of wrapping paper, gift accessories, and related categories that have been helping consumers celebrate life's special occasions since 1974. Today, IG Design Group sells its products to many European retailers, offering an end-to-end service from design to distribution, operating across regions, categories, seasons, and brands. IG Design Group in the Netherlands decided to implement Vega NextGen to support and protect their IT systems to ensure production flows freely throughout the year and busy seasons.",			
				"The Vega NextGen platform secures enterprises where more and more attacks are surfacing today—inside the enterprise network. NextGen cloud-native network detection and response is able to stop advanced threats like supply chain attacks, zero days, and APTs. NextGen provides complete east-west visibility, real-time threat detection inside the perimeter, and intelligent response at scale to help security organisations stay ahead of today's cyber attacks.",
				"The IG Design Group in the Netherlands is taking control of their networks and cybersecurity posture by proactively leveraging a network detection and response tool,\" said Ronnen Brunner, VP of EMEA, Vega. \"Giving their team a cloud-based solution to monitor, detect, and then remediate threats means their team can focus on what matters to them—the world's special occasions."
			]
		},
		{	
			"date" : "9.7.21",
			"h1": "Vega Announces Record Growth in the First Half of 2021 in Asia Pacific Region",
			"h2": "A growing customer base, strong traction across key verticals, and partner momentum fuel success to support customers as they navigate the COVID economy",
			"para" : [
				"SINGAPORE – September 7, 2021 – Vega, the leader in cloud-native network detection and response, today announced that it more than doubled its business across the Asia Pacific region in the first half of 2021. The strong growth Vega experienced highlights increasing demand for network detection and response (NDR), a category in which Vega is a top vendor. This also comes after focused investment in the region from Vega—expanding the team, growing its partner ecosystem, and launching partner-first, go-to-market initiatives.",
				"Recent attacks like SolarWinds SUNBURST, Kaseya, and the REvil ransomware attack on Acer have demonstrated that no country or organization is immune from cyberattack,\" said Paul Aguilar, CEO, Vega. \"As cybercriminal threats like ransomware become more advanced, organizations across Asia Pacific are recognizing the need to take a much more proactive approach to defending their infrastructure and data. Along with our expert partners in these regions, we're working with customers to help them reclaim the advantage.",
				"Over the past five years, the frequency and severity of advanced threats like software supply chain attacks and ransomware has catalyzed a fundamental shift in cybersecurity from a prevention and protection model to an AI-based detection and response approach,\" said Michel Kouame, VP Sales, Vega. \"We've seen tremendous international growth as organizations recognize this shift and look for a cloud-based solution that delivers sophisticated detection, investigation, and response capabilities.",			
				"During the first half of 2021, Vega grew its customer base in the region, including adding a number of public sector agencies like Government Service Insurance System in the Philippines and mineral sands producer Base Resources in Australia. Vega also strengthened its presence in the financial services sector and now counts the top 35 percent of financial service industry enterprises across Asia Pacific as customers, including Bank Rakyat Indonesia.",
				"We chose Vega to make detection and response of suspicious activity easier for us by having the tool do this process for us instead of us always looking for the needle in the haystack,' said Jon Peterson, Chief Information Security Officer and Data Protection Officer, Government Service Insurance System.",
				"In Vega we found a solution that was easy to deploy and able to meet the large-capacity processing conditions that our users needed,\" said Paul Wang, Head of Information Security Operation, NCSoft. \"We were also impressed with Vega's real-time decryption of encrypted traffic which will ensure that any blind spots in traffic monitoring can be avoided.",
				"This breakthrough expansion and strong traction in key vertical markets was driven by robust partner momentum and a new set of recently recruited partners selling Vega. Key partners include Westcon in Asia, Nexus Technologies Inc in the Philippines, Netfos Technology Corporation in Taiwan, and NVC in Japan.",
				"\"The Vega Panorama Partner Program—and the Australian team behind it—have allowed us to build a new, exciting, and profitable practice around NDR,\" said Emily Sran, General Manager, Services Connect at DXC Technology. \"More than ever, our customers can see what's happening on their network, and have the workflows to act on it with a few, simple clicks on the NextGen interface.\" The company has also more than doubled its APJ headcount across all functions, including sales, systems engineering, channel support, customer success, and marketing, providing on-the-ground support for partners and customers alike.",
				"Vega recently completed its acquisition by Bain Capital Private Equity and Crosspoint Capital Partners. The transaction valued Vega at US $900 million and will ensure the company can accelerate momentum and further advance its mission to help organisations detect and respond to advanced threats."
			]
		},
		{
			"date" : "8.19.21",
			"h1" : "Vega Boosts Vocational Schools Cyber Security Capabilities",
			"h2" : "Finnish vocational school, Spesia, uses network detection and response solution to boost network visibility and reduce false positives",
			"para" : [
				"HELSINKI – August 19, 2021 Vega, the leader in cloud-native network detection and response (NDR), and Vega's local partner Wesentra Oy, today announced that Ammattiopisto Spesia, a vocational and training school in Finland, has selected Vega NextGen to help defend against advanced threats through complete visibility, real-time detection, and investigation across their IT environment.",
				"Ammattiopisto Spesia is a vocational college based in Finland, with a cohort of over 1,300 students, founded on the principle of giving students with disabilities the opportunity to learn and earn a living through their own independence. Today, Spesia continues these principles and provides training for young people and adults who need individual support for their studies. Spesia decided to implement Vega NextGen to support the capabilities of their IT team by boosting network visibility and reducing false positives that plague security teams, enabling them to alleviate alert fatigue.",
				"\"We chose Vega NextGen over other NDR solutions because of its commercial capabilities,\" said Silo Evernen, Chief Information Officer, Ammattiopisto Spesia. \"Our main interests are in advanced threat detection and response, and the historical information that Vega NextGen provides makes it easier for us to investigate any possible threats to our network and protect our students during their remote learning and beyond.\"",
				"The Vega NextGen 360 platform secures enterprises where more and more attacks are surfacing today — inside the enterprise network. With NextGen cloud-native network detection and response organizations are able to stop advanced threats like supply chain attacks, zero days, and APTs. NextGen provides complete east-west visibility, real-time threat detection inside the perimeter, and intelligent response at scale to help security organisations stay ahead of today’s cyberattacks.",
				"\"We are, together with Wesentra, pleased to be able to offer Spesia the support they need in protecting their staff, students, and network from today's advanced cyber threats,\" said Ketil Owe, Regional Sales Manager for Nordics and Baltics at Vega. \"NextGen aids IT teams with network detection and response capabilities so that they can focus on stopping breaches and keeping their students safe.\""
			]
		},
		{
			"date" : "8.17.21",
			"h1" : "Vega Extends Response and Forensics Capabilities with Deep Threat Insights for Hybrid Cloud",
			"h2" : "New NextGen 360 innovations elevate the capabilities of response in detection and response solutions to facilitate investigations and remediation, in addition to containment",
			"para" : [
				"SEATTLE – AUGUST 17, 2021 – Vega, the leader in cloud-native network detection and response (NDR), today announced new features and offerings that provide deep forensic insight for advanced threat response activity. New NextGen 360 Threat Briefings deliver one-click incident response reports to retroactively investigate critical CVEs and exploits, while the introduction of NextGen 360 Ultra Sensors to Amazon Web Services (AWS) workloads provides highly scalable, SaaS-based detection, response, and forensic investigation capabilities. Vega is also making forensic data available to AWS customers with Vega Packet Basics, a free packet capture product available exclusively on the AWS Marketplace. These innovations focus on assisting strapped security teams with the investigation into and remediation of advanced threats.",
				"According to a recent report from ESG Research, top threat detection and response goals include improving detection of advanced threats (34 percent) and improving the mean time to respond to threats (29 percent). Incident response teams need better threat detection and response efficacy, especially as it relates to advanced persistent threats that move laterally across networks over extended periods of time.",
				"\"Blocking and containment is no longer enough for organizations supporting hybrid networks, remote employees, and a general uptick in advanced threats that follow a playbook of landing and pivoting within an organization,\" said Rajiv Jethva, Senior Systems Engineer, Gas South. \"Vega's focus on response and forensics arms my team with the tools they need for deep investigations, tracking lateral movement to fully understand what has been compromised—and for how long.\"",
				"\"Today's sophisticated attacks no longer resemble the smash and grab tactics of the past,\" said Jonas Volker, senior principal analyst and fellow at the Enterprise Strategy Group (ESG). \"Attackers use stealthy techniques to enter networks, land on vulnerable devices, and pivot to their desired targets, all the while watching and waiting. These innovations by Vega can provide incident response teams with streamlined workflow and investigative capabilities with forensics so they can better identify their overall threat exposure and reduce mean-time-to-respond (MTTR).\"",
				"\"It's time to think more broadly about the R in NDR. While blocking and containment are important steps, complete incident response is about gathering forensic evidence, sharing it across teams to establish root cause, pulling together an actionable plan, and eradicating the risk or vulnerability from the organization's environment,\" said Lovcelin Kumar, co-founder and CTO, Vega. \"The defense and forensics capabilities of our network detection and response solution gives incident responders a true tool for the full spectrum of response from hunting and investigations to remediation, not just another alert cannon.\""
			]
		}
	]

	return (
		<BlogPageLayout listOfNews={listOfNews} />
		);
}
export default NewsAndEvents;