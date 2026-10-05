//#region node_modules/.nitro/vite/services/ssr/assets/schemes-3mXs6HJV.js
/**
* Reference dataset of real, currently-running Central and Gujarat Government
* schemes. Each entry records the eligibility conditions as published on the
* scheme's own official government portal, together with the official source
* URL so citizens can always verify against the authoritative page.
*
* This is NOT invented data and it is NOT presented as a government API feed:
* every scheme declares dataSource.kind = "curated_reference" and the UI labels
* it as curated reference data with a link to the official portal.
*
* The browser-accessible public API integration (data.gov.in open-data
* catalogue) lives in src/services/governmentApi.ts and is surfaced separately
* as live official dataset results.
*/
var CURATED = (provider) => ({
	provider,
	kind: "curated_reference",
	note: "Eligibility conditions compiled from the scheme's official government portal. Verify on the official source before applying."
});
var GOI = CURATED("Government of India");
var GOG = CURATED("Government of Gujarat");
var SCHEMES = [
	{
		id: "pm-mudra-yojana",
		name: "Pradhan Mantri MUDRA Yojana (PMMY)",
		shortName: "PM MUDRA",
		level: "central",
		department: "Micro Units Development and Refinance Agency (MUDRA)",
		ministry: "Ministry of Finance",
		categories: [
			"loan",
			"business",
			"startup",
			"employment",
			"financial"
		],
		benefitType: "loan",
		benefitSummary: "Collateral-free loans up to ₹20 lakh for non-farm micro and small enterprises",
		overview: "PMMY provides collateral-free institutional credit to non-corporate, non-farm small and micro enterprises through banks, NBFCs and micro finance institutions. Loans are categorised as Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakh), Tarun (₹5 lakh to ₹10 lakh) and Tarun Plus (₹10 lakh to ₹20 lakh).",
		eligibilityText: [
			"Any Indian citizen who has a business plan for a non-farm income generating activity such as manufacturing, processing, trading, services or allied agricultural activities.",
			"Credit requirement of up to ₹20 lakh.",
			"The applicant should not be a defaulter to any bank or financial institution.",
			"No income ceiling is published for this scheme."
		],
		criteria: [{
			type: "age",
			min: 18,
			label: "Applicant is 18 years or older"
		}, {
			type: "condition",
			key: "entrepreneur",
			mustBe: true,
			label: "Wants to start or expand a business"
		}],
		benefits: [
			"Collateral-free loan up to ₹20 lakh in four categories (Shishu, Kishore, Tarun, Tarun Plus)",
			"No processing fee for most Shishu category loans",
			"Working capital facility through MUDRA card"
		],
		documents: [
			"Identity proof and address proof",
			"Proof of business address and business identity (if existing)",
			"Quotation of machinery or items to be purchased",
			"Bank statements (usually last 6 months)",
			"Caste certificate, if applicable"
		],
		applicationProcess: [
			"Prepare a simple business plan with the amount required and its use.",
			"Apply online on the Jan Samarth portal or visit any bank, NBFC or MFI branch that offers MUDRA loans.",
			"Submit the loan application with KYC and business documents.",
			"The lender appraises the proposal and sanctions the loan as per its credit policy."
		],
		importantDates: "Open throughout the year; no application window.",
		officialSourceUrl: "https://www.mudra.org.in/",
		officialSourceName: "MUDRA, Government of India",
		applyUrl: "https://www.jansamarth.in/",
		applyLabel: "Apply on Jan Samarth portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "stand-up-india",
		name: "Stand-Up India Scheme",
		level: "central",
		department: "Department of Financial Services",
		ministry: "Ministry of Finance",
		categories: [
			"loan",
			"business",
			"startup",
			"employment",
			"women"
		],
		benefitType: "loan",
		benefitSummary: "Bank loans of ₹10 lakh to ₹1 crore for SC, ST and women entrepreneurs",
		overview: "Stand-Up India facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste or Scheduled Tribe borrower and at least one woman borrower per bank branch, for setting up a greenfield enterprise in manufacturing, services, trading or activities allied to agriculture.",
		eligibilityText: [
			"SC, ST or woman entrepreneur, above 18 years of age.",
			"For non-individual enterprises, 51% of the shareholding and controlling stake must be held by an SC/ST or woman entrepreneur.",
			"Loans are for greenfield projects — the first time the beneficiary is setting up this enterprise.",
			"The borrower should not be in default to any bank or financial institution."
		],
		criteria: [{
			type: "age",
			min: 18,
			label: "Applicant is 18 years or older"
		}, {
			type: "condition",
			key: "entrepreneur",
			mustBe: true,
			label: "Setting up a new (greenfield) enterprise"
		}],
		benefits: [
			"Composite loan of ₹10 lakh to ₹1 crore covering 85% of the project cost",
			"Credit guarantee support and handholding for the enterprise",
			"RuPay debit card for working capital withdrawal"
		],
		documents: [
			"Proof of identity and residence",
			"Caste certificate (for SC/ST applicants)",
			"Project report / business plan",
			"Proof of business premises",
			"PAN of the enterprise, where applicable"
		],
		applicationProcess: [
			"Register on the Stand-Up India portal (standupmitra.in) and complete the handholding questionnaire.",
			"The portal connects you to a lead district manager, bank branch and handholding agency.",
			"Submit the loan application and project report to the bank branch.",
			"The bank appraises and sanctions the loan as per scheme guidelines."
		],
		officialSourceUrl: "https://www.standupmitra.in/",
		officialSourceName: "Stand-Up India, Government of India",
		applyUrl: "https://www.standupmitra.in/Login/Register",
		applyLabel: "Register on Stand-Up Mitra",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pmegp",
		name: "Prime Minister's Employment Generation Programme (PMEGP)",
		shortName: "PMEGP",
		level: "central",
		department: "Khadi and Village Industries Commission (KVIC)",
		ministry: "Ministry of Micro, Small and Medium Enterprises",
		categories: [
			"employment",
			"business",
			"subsidy",
			"loan",
			"skill"
		],
		benefitType: "subsidy",
		benefitSummary: "Margin money subsidy of 15–35% on projects up to ₹50 lakh (manufacturing)",
		overview: "PMEGP is a credit-linked subsidy programme for setting up new micro enterprises in the non-farm sector. Government margin money subsidy ranges from 15% to 35% of the project cost depending on the category of beneficiary and whether the unit is in a rural or urban area.",
		eligibilityText: [
			"Any individual above 18 years of age.",
			"For projects above ₹10 lakh in manufacturing and above ₹5 lakh in the service sector, the applicant should have passed at least Class 8.",
			"Only new units are eligible; existing units and units already availing a government subsidy are not.",
			"There is no income ceiling for assistance under PMEGP.",
			"Higher subsidy for SC, ST, OBC, minorities, women, ex-servicemen, persons with disability and applicants from North East, hill and border areas."
		],
		criteria: [{
			type: "age",
			min: 18,
			label: "Applicant is 18 years or older"
		}, {
			type: "condition",
			key: "entrepreneur",
			mustBe: true,
			label: "Setting up a new micro enterprise"
		}],
		benefits: [
			"Margin money subsidy: 25% (rural) / 15% (urban) for general category; 35% (rural) / 25% (urban) for special categories",
			"Project cost up to ₹50 lakh for manufacturing and ₹20 lakh for service units",
			"Free entrepreneurship development training before loan release"
		],
		documents: [
			"Aadhaar and PAN",
			"Project report",
			"Education certificate (where required by project cost)",
			"Caste / special category certificate, if applicable",
			"Rural area certificate, if claiming rural subsidy"
		],
		applicationProcess: [
			"Register and fill the online application on the PMEGP e-portal.",
			"Select the implementing agency (KVIC, KVIB or District Industries Centre).",
			"Attend the interview before the district task force committee.",
			"On approval, complete EDP training; the bank releases the loan and the subsidy is kept as a term deposit."
		],
		officialSourceUrl: "https://www.kviconline.gov.in/pmegpeportal/",
		officialSourceName: "KVIC, Ministry of MSME",
		applyUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
		applyLabel: "Apply on PMEGP e-portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "startup-india-recognition",
		name: "Startup India — DPIIT Startup Recognition",
		level: "central",
		department: "Department for Promotion of Industry and Internal Trade (DPIIT)",
		ministry: "Ministry of Commerce and Industry",
		categories: [
			"startup",
			"business",
			"employment"
		],
		benefitType: "in_kind",
		benefitSummary: "Tax benefits, self-certification, IPR fast-tracking and fund access for recognised startups",
		overview: "DPIIT recognition gives an eligible startup access to income tax exemptions, self-certification under labour and environment laws, faster patent and trademark processing at reduced fees, relaxed public procurement norms and eligibility for the Fund of Funds and Startup India Seed Fund Scheme.",
		eligibilityText: [
			"Incorporated as a private limited company, registered partnership firm or limited liability partnership in India.",
			"Not more than 10 years have passed since incorporation or registration.",
			"Annual turnover has not exceeded ₹100 crore in any financial year since incorporation.",
			"Working towards innovation, development or improvement of products, processes or services, or a scalable business model with potential for wealth creation and employment.",
			"Not formed by splitting up or reconstructing an existing business."
		],
		criteria: [{
			type: "age",
			min: 18,
			label: "Founder is 18 years or older"
		}, {
			type: "condition",
			key: "entrepreneur",
			mustBe: true,
			label: "Running or starting an innovative business"
		}],
		benefits: [
			"Income tax exemption for three consecutive years under Section 80-IAC (subject to approval)",
			"80% rebate on patent filing fees and 50% on trademark fees, with fast-tracked examination",
			"Self-certification under 6 labour and 3 environment laws",
			"Exemption from prior turnover and experience requirements in public procurement"
		],
		documents: [
			"Certificate of incorporation or registration",
			"PAN of the entity",
			"Details of directors or partners",
			"A short write-up or website/video link explaining the innovation and business model"
		],
		applicationProcess: [
			"Register the entity on the Startup India portal.",
			"Apply for DPIIT recognition through the National Single Window System.",
			"Upload the incorporation certificate and the innovation write-up.",
			"Recognition certificate is issued online after evaluation."
		],
		officialSourceUrl: "https://www.startupindia.gov.in/",
		officialSourceName: "Startup India, DPIIT",
		applyUrl: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html",
		applyLabel: "Apply for DPIIT recognition",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pmay-urban-2",
		name: "Pradhan Mantri Awas Yojana — Urban 2.0",
		shortName: "PMAY-U 2.0",
		level: "central",
		department: "Ministry of Housing and Urban Affairs",
		categories: [
			"housing",
			"subsidy",
			"financial"
		],
		benefitType: "subsidy",
		benefitSummary: "Central assistance for a pucca house in urban areas, including interest subsidy on home loans",
		overview: "PMAY-U 2.0 provides central assistance to eligible urban families for constructing, buying or renting a pucca house, through four verticals: Beneficiary Led Construction, Affordable Housing in Partnership, Affordable Rental Housing and the Interest Subsidy Scheme.",
		eligibilityText: [
			"The family (applicant, spouse and unmarried children) must not own a pucca house anywhere in India.",
			"EWS: annual household income up to ₹3 lakh. LIG: above ₹3 lakh up to ₹6 lakh. MIG: above ₹6 lakh up to ₹9 lakh.",
			"The family should not have availed assistance under any earlier central housing scheme.",
			"Applicable in statutory towns and notified planning areas as per Census 2011 and subsequent notifications."
		],
		criteria: [
			{
				type: "area",
				values: ["urban"],
				label: "Lives in an urban area"
			},
			{
				type: "income",
				max: 9e5,
				label: "Annual household income up to ₹9,00,000"
			},
			{
				type: "condition",
				key: "noPuccaHouse",
				mustBe: true,
				label: "Family does not own a pucca house"
			},
			{
				type: "age",
				min: 18,
				label: "Applicant is 18 years or older"
			}
		],
		benefits: [
			"Central assistance of ₹2.5 lakh for beneficiary-led construction or affordable housing (EWS)",
			"Interest subsidy up to ₹1.80 lakh on home loans up to ₹25 lakh under the Interest Subsidy Scheme",
			"Affordable rental housing for urban migrants and workers"
		],
		documents: [
			"Aadhaar of all family members",
			"Income certificate or self-declaration of income",
			"Proof of land ownership (for beneficiary led construction)",
			"Bank account details linked to Aadhaar",
			"Self-declaration of not owning a pucca house"
		],
		applicationProcess: [
			"Check eligibility and apply on the PMAY-U 2.0 portal, or through the Urban Local Body / Common Service Centre.",
			"Aadhaar-based verification of the applicant and family members.",
			"The Urban Local Body verifies land, income and house ownership details.",
			"Assistance is released in instalments to the Aadhaar-linked bank account, or as interest subsidy through the lender."
		],
		officialSourceUrl: "https://pmay-urban.gov.in/",
		officialSourceName: "Ministry of Housing and Urban Affairs",
		applyUrl: "https://pmay-urban.gov.in/",
		applyLabel: "Apply on PMAY-U 2.0 portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pmay-gramin",
		name: "Pradhan Mantri Awas Yojana — Gramin",
		shortName: "PMAY-G",
		level: "central",
		department: "Ministry of Rural Development",
		categories: [
			"housing",
			"subsidy",
			"financial",
			"social_welfare"
		],
		benefitType: "subsidy",
		benefitSummary: "₹1.20 lakh (plain areas) or ₹1.30 lakh (hilly/difficult areas) to build a pucca rural house",
		overview: "PMAY-G provides assistance to rural households that are houseless or living in kutcha or dilapidated houses, to build a pucca house with basic amenities. Beneficiaries are identified through the Awaas+ survey and verified by the Gram Sabha.",
		eligibilityText: [
			"Rural household that is houseless, or living in a kutcha or dilapidated house with up to two rooms.",
			"Household must satisfy the prescribed exclusion criteria — for example no motorised four-wheeler, no mechanised farm equipment, no member earning more than ₹15,000 per month, no income tax or professional tax payer, no refrigerator or landline telephone.",
			"Monthly income of the household should not exceed ₹15,000.",
			"Priority to SC/ST households, freed bonded labourers, and other identified vulnerable groups."
		],
		criteria: [
			{
				type: "area",
				values: ["rural"],
				label: "Lives in a rural area"
			},
			{
				type: "income",
				max: 18e4,
				label: "Household income up to ₹15,000 per month (₹1,80,000 per year)"
			},
			{
				type: "condition",
				key: "noPuccaHouse",
				mustBe: true,
				label: "Family does not own a pucca house"
			},
			{
				type: "condition",
				key: "incomeTaxPayer",
				mustBe: false,
				label: "No income tax payer in the household"
			}
		],
		benefits: [
			"Unit assistance of ₹1.20 lakh in plain areas and ₹1.30 lakh in hilly, difficult and IAP districts",
			"Additional support for a toilet, 90–95 days of unskilled wage employment under MGNREGA, LPG connection and electricity connection",
			"Minimum house size of 25 square metres with a dedicated cooking area"
		],
		documents: [
			"Aadhaar and job card number",
			"Bank or post office account details",
			"Swachh Bharat Mission toilet number, where available",
			"Self-declaration of house ownership status"
		],
		applicationProcess: [
			"Household details are captured through the Awaas+ survey by the Gram Panchayat.",
			"The Gram Sabha verifies the list of eligible households.",
			"Sanction is issued and instalments are transferred directly to the beneficiary's bank account as construction progresses.",
			"Track your application on the PMAY-G portal using the registration number."
		],
		officialSourceUrl: "https://pmayg.nic.in/",
		officialSourceName: "Ministry of Rural Development",
		applyUrl: "https://pmayg.nic.in/netiayHome/home.aspx",
		applyLabel: "PMAY-G portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "ayushman-bharat-pmjay",
		name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
		shortName: "AB PM-JAY",
		level: "central",
		department: "National Health Authority",
		ministry: "Ministry of Health and Family Welfare",
		categories: [
			"healthcare",
			"insurance",
			"financial",
			"senior"
		],
		benefitType: "insurance",
		benefitSummary: "Health cover of ₹5 lakh per family per year for secondary and tertiary hospitalisation",
		overview: "PM-JAY provides cashless health cover of ₹5 lakh per family per year at empanelled public and private hospitals. Eligibility is based on the deprivation and occupational criteria of the Socio-Economic Caste Census 2011, and all citizens aged 70 years and above are covered irrespective of income under the Ayushman Vay Vandana extension.",
		eligibilityText: [
			"Rural households identified under the SECC 2011 deprivation criteria, such as households with kutcha walls and roof, no adult member aged 16–59, SC/ST households, or landless households earning mainly from manual casual labour.",
			"Urban households in the 11 identified occupational categories, such as rag pickers, domestic workers, street vendors, construction workers and transport workers.",
			"All senior citizens aged 70 years and above are eligible irrespective of income under Ayushman Vay Vandana.",
			"There is no restriction on family size, age or gender for eligible families."
		],
		criteria: [{
			type: "income",
			max: 25e4,
			label: "Household in the SECC-identified low-income group"
		}],
		benefits: [
			"₹5 lakh family floater cover per year for over 1,900 treatment packages",
			"Cashless and paperless treatment at empanelled hospitals across India",
			"Covers pre-hospitalisation (3 days) and post-hospitalisation (15 days) expenses including medicines and diagnostics"
		],
		documents: [
			"Aadhaar or any government photo ID",
			"Ration card or family ID for family verification",
			"Mobile number for OTP verification"
		],
		applicationProcess: [
			"Check your eligibility on the beneficiary portal or by calling 14555.",
			"Complete e-KYC on the Ayushman app, beneficiary portal, or at a Common Service Centre or empanelled hospital.",
			"Download your Ayushman card after approval.",
			"Show the card at the Ayushman Mitra help desk of any empanelled hospital for cashless treatment."
		],
		officialSourceUrl: "https://nha.gov.in/PM-JAY",
		officialSourceName: "National Health Authority, Government of India",
		applyUrl: "https://beneficiary.nha.gov.in/",
		applyLabel: "Check eligibility & apply",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "ayushman-vay-vandana",
		name: "Ayushman Vay Vandana — Health cover for citizens aged 70+",
		level: "central",
		department: "National Health Authority",
		ministry: "Ministry of Health and Family Welfare",
		categories: [
			"senior",
			"healthcare",
			"insurance"
		],
		benefitType: "insurance",
		benefitSummary: "₹5 lakh free health cover per year for all citizens aged 70 and above, regardless of income",
		overview: "Under this extension of AB PM-JAY, every Indian citizen aged 70 years and above is entitled to a ₹5 lakh annual health cover irrespective of family income. Senior citizens in families already covered under PM-JAY receive an additional top-up cover of ₹5 lakh for their own use.",
		eligibilityText: [
			"Indian citizen aged 70 years or above.",
			"No income ceiling — eligibility is based on age alone.",
			"Aadhaar-based e-KYC is required to issue the Ayushman Vay Vandana card."
		],
		criteria: [{
			type: "age",
			min: 70,
			label: "Aged 70 years or above"
		}],
		benefits: [
			"₹5 lakh annual health cover for the senior citizen",
			"Additional top-up cover for seniors in families already enrolled under PM-JAY",
			"Cashless treatment at empanelled hospitals nationwide"
		],
		documents: ["Aadhaar showing age 70 or above", "Mobile number for OTP-based e-KYC"],
		applicationProcess: [
			"Visit the beneficiary portal or use the Ayushman app.",
			"Complete Aadhaar-based e-KYC and capture a photograph.",
			"Download the Ayushman Vay Vandana card."
		],
		officialSourceUrl: "https://nha.gov.in/PM-JAY",
		officialSourceName: "National Health Authority, Government of India",
		applyUrl: "https://beneficiary.nha.gov.in/",
		applyLabel: "Enrol on beneficiary portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pm-kisan",
		name: "Pradhan Mantri Kisan Samman Nidhi",
		shortName: "PM-KISAN",
		level: "central",
		department: "Department of Agriculture and Farmers Welfare",
		ministry: "Ministry of Agriculture and Farmers Welfare",
		categories: [
			"agriculture",
			"financial",
			"subsidy"
		],
		benefitType: "cash",
		benefitSummary: "₹6,000 per year in three equal instalments to landholding farmer families",
		overview: "PM-KISAN provides income support of ₹6,000 per year, paid in three four-monthly instalments of ₹2,000, directly into the bank accounts of eligible landholding farmer families across the country.",
		eligibilityText: [
			"Landholding farmer family — husband, wife and minor children — owning cultivable land in their name.",
			"Institutional landholders are excluded.",
			"Excluded: former and present holders of constitutional posts, serving or retired government employees (except Group D / multi-tasking staff), pensioners with a monthly pension of ₹10,000 or more, income tax payers in the last assessment year, and professionals such as doctors, engineers, lawyers, chartered accountants and architects registered with professional bodies.",
			"Aadhaar linkage and e-KYC are mandatory, along with land seeding of records."
		],
		criteria: [
			{
				type: "condition",
				key: "landOwner",
				mustBe: true,
				label: "Family owns cultivable agricultural land"
			},
			{
				type: "condition",
				key: "incomeTaxPayer",
				mustBe: false,
				label: "Not an income tax payer"
			},
			{
				type: "age",
				min: 18,
				label: "Applicant is 18 years or older"
			}
		],
		benefits: ["₹2,000 every four months, ₹6,000 per year, credited directly to the bank account", "No intermediary or fee required"],
		documents: [
			"Aadhaar",
			"Land record / khatauni details",
			"Bank account details (Aadhaar seeded)",
			"Citizenship and category details"
		],
		applicationProcess: [
			"Register through the PM-KISAN portal 'New Farmer Registration' or at the village revenue officer / Common Service Centre.",
			"Complete Aadhaar-based e-KYC (OTP, biometric or face authentication).",
			"State officials verify the land records.",
			"Instalments are released to the Aadhaar-seeded bank account."
		],
		importantDates: "Instalments are released three times a year; registration remains open.",
		officialSourceUrl: "https://pmkisan.gov.in/",
		officialSourceName: "Ministry of Agriculture and Farmers Welfare",
		applyUrl: "https://pmkisan.gov.in/RegistrationFormnew.aspx",
		applyLabel: "New farmer registration",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pm-svanidhi",
		name: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",
		shortName: "PM SVANidhi",
		level: "central",
		department: "Ministry of Housing and Urban Affairs",
		categories: [
			"loan",
			"employment",
			"business",
			"financial"
		],
		benefitType: "loan",
		benefitSummary: "Collateral-free working capital loans of ₹15,000 to ₹50,000 for street vendors",
		overview: "PM SVANidhi offers street vendors collateral-free working capital loans in progressive tranches, with an interest subsidy of 7% per annum on timely repayment and cashback incentives for digital transactions.",
		eligibilityText: [
			"Street vendors in urban areas holding a Certificate of Vending or identity card issued by the Urban Local Body.",
			"Vendors identified in the ULB survey but not yet issued a certificate, and those left out of the survey or vending in peri-urban and rural areas, can apply with a letter of recommendation from the ULB or Town Vending Committee.",
			"No income ceiling is published for this scheme."
		],
		criteria: [{
			type: "condition",
			key: "streetVendor",
			mustBe: true,
			label: "Works as a street vendor"
		}, {
			type: "age",
			min: 18,
			label: "Applicant is 18 years or older"
		}],
		benefits: [
			"First loan up to ₹15,000, second up to ₹25,000 and third up to ₹50,000 on timely repayment",
			"7% annual interest subsidy credited quarterly",
			"Cashback of up to ₹1,200 a year for digital transactions"
		],
		documents: [
			"Certificate of Vending or ULB identity card, or letter of recommendation",
			"Aadhaar",
			"Bank account details",
			"Voter ID or other identity proof"
		],
		applicationProcess: [
			"Apply on the PM SVANidhi portal or through a lending institution, Common Service Centre or ULB office.",
			"Aadhaar e-KYC and vendor verification are completed online.",
			"The lender sanctions the loan and disburses it to your bank account."
		],
		officialSourceUrl: "https://pmsvanidhi.mohua.gov.in/",
		officialSourceName: "Ministry of Housing and Urban Affairs",
		applyUrl: "https://pmsvanidhi.mohua.gov.in/Home/ApplicationProcess",
		applyLabel: "Apply on PM SVANidhi portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pm-vishwakarma",
		name: "PM Vishwakarma",
		level: "central",
		department: "Ministry of Micro, Small and Medium Enterprises",
		categories: [
			"skill",
			"loan",
			"employment",
			"business",
			"financial"
		],
		benefitType: "loan",
		benefitSummary: "Skill training with ₹500 daily stipend, ₹15,000 toolkit incentive and collateral-free loans up to ₹3 lakh",
		overview: "PM Vishwakarma supports artisans and craftspeople working with their hands and tools in 18 identified trades, with recognition, skill upgradation, toolkit incentive, collateral-free credit, digital transaction incentives and marketing support.",
		eligibilityText: [
			"Artisan or craftsperson working with hands and tools in one of the 18 listed family-based traditional trades, such as carpenter, blacksmith, goldsmith, potter, cobbler, tailor, barber, mason, basket weaver, or toy maker.",
			"Minimum age of 18 years at the time of registration.",
			"Must be engaged in the trade on the date of registration and must not have availed a loan under similar central or state credit schemes such as PMEGP, PM SVANidhi or Mudra in the past 5 years.",
			"Government employees and their family members are not eligible.",
			"Only one member per family may register."
		],
		criteria: [{
			type: "age",
			min: 18,
			label: "Aged 18 years or above"
		}, {
			type: "condition",
			key: "artisan",
			mustBe: true,
			label: "Works as an artisan or craftsperson"
		}],
		benefits: [
			"PM Vishwakarma certificate and ID card",
			"Basic training of 5–7 days and advanced training of 15 days or more, with a stipend of ₹500 per day",
			"₹15,000 e-voucher toolkit incentive",
			"Collateral-free enterprise development loan of ₹1 lakh (18 months) and ₹2 lakh (30 months) at 5% concessional interest",
			"₹1 per digital transaction incentive, up to 100 transactions a month"
		],
		documents: [
			"Aadhaar",
			"Mobile number linked to Aadhaar",
			"Bank account details",
			"Ration card or family details"
		],
		applicationProcess: [
			"Register through a Common Service Centre or Gram Panchayat using Aadhaar-based biometric authentication.",
			"Verification happens at Gram Panchayat / ULB, district and screening committee levels.",
			"On approval, receive the certificate and ID card and enrol for training."
		],
		officialSourceUrl: "https://pmvishwakarma.gov.in/",
		officialSourceName: "Ministry of MSME, Government of India",
		applyUrl: "https://pmvishwakarma.gov.in/",
		applyLabel: "Register on PM Vishwakarma portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "post-matric-scholarship-sc",
		name: "Post Matric Scholarship for Scheduled Caste Students",
		level: "central",
		department: "Department of Social Justice and Empowerment",
		ministry: "Ministry of Social Justice and Empowerment",
		categories: [
			"scholarship",
			"education",
			"financial"
		],
		benefitType: "scholarship",
		benefitSummary: "Maintenance allowance and full course fees for SC students studying after Class 10",
		overview: "This centrally sponsored scheme supports Scheduled Caste students pursuing recognised post-matriculation or post-secondary courses, by paying non-refundable compulsory fees and a monthly maintenance allowance based on the course group and whether the student is a hosteller or day scholar.",
		eligibilityText: [
			"Student must belong to a Scheduled Caste notified by the Central Government.",
			"Total annual income of the parents or guardians from all sources must not exceed ₹2.50 lakh.",
			"Student must have passed Class 10 (matriculation) and be studying a recognised post-matric course in a recognised institution.",
			"Students studying in the same class or repeating a year are generally not eligible for a fresh award.",
			"Only two children of the same parents may receive the scholarship."
		],
		criteria: [
			{
				type: "category",
				values: ["sc"],
				label: "Belongs to Scheduled Caste"
			},
			{
				type: "income",
				max: 25e4,
				label: "Parental annual income up to ₹2,50,000"
			},
			{
				type: "education",
				min: "class_10",
				label: "Passed Class 10"
			},
			{
				type: "student",
				value: true,
				label: "Currently studying"
			}
		],
		benefits: [
			"Full reimbursement of non-refundable compulsory fees charged by government institutions",
			"Monthly maintenance allowance by course group for hostellers and day scholars",
			"Additional allowances for students with disability, and book grants for correspondence courses"
		],
		documents: [
			"SC caste certificate issued by a competent authority",
			"Income certificate of parents or guardians",
			"Class 10 and latest qualifying examination marksheets",
			"Institution verification / bonafide certificate",
			"Aadhaar and Aadhaar-linked bank account details"
		],
		applicationProcess: [
			"Register on the National Scholarship Portal (or your state's scholarship portal, where the state administers the scheme).",
			"Fill the application, upload caste, income and academic documents.",
			"The institution verifies the application online.",
			"The scholarship is credited directly to the student's Aadhaar-linked bank account."
		],
		importantDates: "Applications usually open around July and close between October and December each academic year — confirm on the portal.",
		officialSourceUrl: "https://socialjustice.gov.in/schemes/25",
		officialSourceName: "Ministry of Social Justice and Empowerment",
		applyUrl: "https://scholarships.gov.in/",
		applyLabel: "Apply on National Scholarship Portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "national-overseas-scholarship-sc",
		name: "National Overseas Scholarship for SC and other notified categories",
		level: "central",
		department: "Department of Social Justice and Empowerment",
		ministry: "Ministry of Social Justice and Empowerment",
		categories: [
			"scholarship",
			"education",
			"financial"
		],
		benefitType: "scholarship",
		benefitSummary: "Full financial support for Master's and PhD study abroad for SC and other notified students",
		overview: "The National Overseas Scholarship funds selected students from Scheduled Castes, denotified nomadic and semi-nomadic tribes, landless agricultural labourers and traditional artisan categories to pursue Master's or PhD programmes at foreign universities.",
		eligibilityText: [
			"Belongs to Scheduled Caste, denotified / nomadic / semi-nomadic tribe, landless agricultural labourer or traditional artisan category.",
			"Total family income from all sources must not exceed ₹8 lakh per year.",
			"Age must be below 35 years as on the date of advertisement.",
			"Minimum 60% marks or equivalent grade in the qualifying examination for the intended course of study.",
			"Must have secured admission, or be seeking admission, in a recognised foreign institution ranked within the top 500 in the QS world ranking."
		],
		criteria: [
			{
				type: "category",
				values: ["sc"],
				label: "Belongs to Scheduled Caste or other notified category"
			},
			{
				type: "income",
				max: 8e5,
				label: "Family annual income up to ₹8,00,000"
			},
			{
				type: "age",
				max: 35,
				label: "Below 35 years of age"
			},
			{
				type: "education",
				min: "graduate",
				label: "Graduate or above"
			}
		],
		benefits: [
			"Annual maintenance allowance, tuition fees, contingency and equipment allowance",
			"Economy class air passage to and from the country of study",
			"Visa fees and medical insurance premium as per scheme norms"
		],
		documents: [
			"Caste or category certificate",
			"Income certificate / ITR of family",
			"Degree certificates and marksheets",
			"Admission or offer letter from the foreign university",
			"Valid passport"
		],
		applicationProcess: [
			"Watch for the annual advertisement on the National Overseas Scholarship portal.",
			"Register and submit the online application with all documents before the deadline.",
			"Shortlisted candidates are selected by the selection committee.",
			"Award letter is issued and funds are released as per scheme norms."
		],
		importantDates: "Advertised once a year, usually between February and April — confirm on the portal.",
		officialSourceUrl: "https://nosmsje.gov.in/",
		officialSourceName: "Ministry of Social Justice and Empowerment",
		applyUrl: "https://nosmsje.gov.in/",
		applyLabel: "Apply on NOS portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pm-yasasvi-obc-ebc-dnt",
		name: "PM YASASVI — Post Matric Scholarship for OBC, EBC and DNT students",
		level: "central",
		department: "Department of Social Justice and Empowerment",
		ministry: "Ministry of Social Justice and Empowerment",
		categories: [
			"scholarship",
			"education",
			"financial"
		],
		benefitType: "scholarship",
		benefitSummary: "Course fees and maintenance allowance for OBC, EBC and DNT students after Class 10",
		overview: "PM YASASVI supports students from Other Backward Classes, Economically Backward Classes and Denotified, Nomadic and Semi-Nomadic Tribes who are studying in recognised post-matric courses, by covering course fees and providing a maintenance allowance.",
		eligibilityText: [
			"Student belongs to OBC, EBC or DNT category as notified by the Central Government.",
			"Total annual family income from all sources must not exceed ₹2.50 lakh.",
			"Student must have passed Class 10 and be enrolled in a recognised post-matric course.",
			"Student must not be receiving any other scholarship for the same purpose."
		],
		criteria: [
			{
				type: "category",
				values: [
					"obc",
					"ews",
					"other"
				],
				label: "Belongs to OBC, EBC or DNT category"
			},
			{
				type: "income",
				max: 25e4,
				label: "Family annual income up to ₹2,50,000"
			},
			{
				type: "education",
				min: "class_10",
				label: "Passed Class 10"
			},
			{
				type: "student",
				value: true,
				label: "Currently studying"
			}
		],
		benefits: [
			"Course fees as per scheme norms",
			"Maintenance allowance for hostellers and day scholars",
			"Direct benefit transfer to the student's bank account"
		],
		documents: [
			"OBC / EBC / DNT certificate",
			"Income certificate",
			"Class 10 marksheet and current course admission proof",
			"Aadhaar-linked bank account details"
		],
		applicationProcess: [
			"Register on the National Scholarship Portal during the application window.",
			"Complete the application and upload category, income and academic documents.",
			"Institute and state authorities verify the application.",
			"Approved scholarship is credited to the student's bank account."
		],
		importantDates: "Application window typically opens in the second half of the academic year — confirm on the National Scholarship Portal.",
		officialSourceUrl: "https://socialjustice.gov.in/",
		officialSourceName: "Ministry of Social Justice and Empowerment",
		applyUrl: "https://scholarships.gov.in/",
		applyLabel: "Apply on National Scholarship Portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pmjjby",
		name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
		shortName: "PMJJBY",
		level: "central",
		department: "Department of Financial Services",
		ministry: "Ministry of Finance",
		categories: [
			"insurance",
			"financial",
			"social_welfare"
		],
		benefitType: "insurance",
		benefitSummary: "₹2 lakh life cover for an annual premium of ₹436",
		overview: "PMJJBY is a one-year renewable term life insurance scheme offering a ₹2 lakh death cover, available to savings bank or post office account holders aged 18 to 50 years who give their consent and auto-debit mandate.",
		eligibilityText: [
			"Age 18 to 50 years (cover continues up to age 55 if enrolled and renewed).",
			"Must hold an individual savings bank or post office account.",
			"Must give consent for auto-debit of the annual premium of ₹436.",
			"No income ceiling and no medical examination required."
		],
		criteria: [{
			type: "age",
			min: 18,
			max: 50,
			label: "Aged between 18 and 50 years"
		}, {
			type: "condition",
			key: "bankAccount",
			mustBe: true,
			label: "Has a savings bank or post office account"
		}],
		benefits: ["₹2,00,000 paid to the nominee on death of the insured from any cause", "Annual premium of ₹436 auto-debited from the bank account"],
		documents: ["Aadhaar linked to the bank account", "Consent-cum-declaration form with nominee details"],
		applicationProcess: [
			"Approach your bank or post office branch, or enrol through net banking or the Jan Suraksha portal.",
			"Submit the consent-cum-declaration form with the auto-debit mandate.",
			"Premium is auto-debited annually, usually in May/June."
		],
		officialSourceUrl: "https://www.jansuraksha.gov.in/",
		officialSourceName: "Department of Financial Services, Government of India",
		applyUrl: "https://www.jansuraksha.gov.in/Forms-PMJJBY.aspx",
		applyLabel: "Enrolment forms",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "pmsby",
		name: "Pradhan Mantri Suraksha Bima Yojana",
		shortName: "PMSBY",
		level: "central",
		department: "Department of Financial Services",
		ministry: "Ministry of Finance",
		categories: [
			"insurance",
			"financial",
			"social_welfare"
		],
		benefitType: "insurance",
		benefitSummary: "₹2 lakh accident cover for an annual premium of ₹20",
		overview: "PMSBY is a one-year renewable accident insurance scheme offering ₹2 lakh for accidental death or total permanent disability and ₹1 lakh for partial permanent disability, for an annual premium of ₹20.",
		eligibilityText: [
			"Age 18 to 70 years.",
			"Must hold an individual savings bank or post office account.",
			"Must give consent for auto-debit of the ₹20 annual premium.",
			"No income ceiling and no medical examination required."
		],
		criteria: [{
			type: "age",
			min: 18,
			max: 70,
			label: "Aged between 18 and 70 years"
		}, {
			type: "condition",
			key: "bankAccount",
			mustBe: true,
			label: "Has a savings bank or post office account"
		}],
		benefits: ["₹2 lakh for accidental death or total and irrecoverable loss of both eyes or limbs", "₹1 lakh for total and irrecoverable loss of sight in one eye or use of one limb"],
		documents: ["Aadhaar linked to the bank account", "Consent-cum-declaration form with nominee details"],
		applicationProcess: [
			"Enrol at your bank or post office branch, through net banking, or via the Jan Suraksha portal.",
			"Give the auto-debit consent for the ₹20 annual premium.",
			"Cover runs from 1 June to 31 May each year and renews automatically."
		],
		officialSourceUrl: "https://www.jansuraksha.gov.in/",
		officialSourceName: "Department of Financial Services, Government of India",
		applyUrl: "https://www.jansuraksha.gov.in/Forms-PMSBY.aspx",
		applyLabel: "Enrolment forms",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "atal-pension-yojana",
		name: "Atal Pension Yojana",
		shortName: "APY",
		level: "central",
		department: "Pension Fund Regulatory and Development Authority",
		ministry: "Ministry of Finance",
		categories: [
			"pension",
			"financial",
			"senior",
			"social_welfare"
		],
		benefitType: "pension",
		benefitSummary: "Guaranteed monthly pension of ₹1,000 to ₹5,000 from age 60",
		overview: "Atal Pension Yojana is a guaranteed pension scheme for citizens in the unorganised sector. Subscribers contribute monthly, quarterly or half-yearly until age 60 and then receive a guaranteed monthly pension of ₹1,000 to ₹5,000 depending on the contribution level and joining age.",
		eligibilityText: [
			"Indian citizen aged between 18 and 40 years.",
			"Must have a savings bank or post office account with auto-debit consent.",
			"Income tax payers are not eligible to join the scheme (from 1 October 2022).",
			"Must not be covered under any statutory social security scheme."
		],
		criteria: [
			{
				type: "age",
				min: 18,
				max: 40,
				label: "Aged between 18 and 40 years"
			},
			{
				type: "condition",
				key: "incomeTaxPayer",
				mustBe: false,
				label: "Not an income tax payer"
			},
			{
				type: "condition",
				key: "bankAccount",
				mustBe: true,
				label: "Has a savings bank account"
			}
		],
		benefits: [
			"Guaranteed monthly pension of ₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 from age 60",
			"Same pension to the spouse after the subscriber's death",
			"Return of accumulated corpus to the nominee after both"
		],
		documents: [
			"Aadhaar",
			"Savings bank account details",
			"Mobile number",
			"Nominee details"
		],
		applicationProcess: [
			"Approach your bank or post office where you hold a savings account, or use net banking.",
			"Fill the APY registration form choosing the pension amount and contribution frequency.",
			"Contributions are auto-debited until you turn 60."
		],
		officialSourceUrl: "https://www.npscra.nsdl.co.in/scheme-details.php",
		officialSourceName: "PFRDA / NPS Trust, Government of India",
		applyUrl: "https://enps.nsdl.com/eNPS/NationalPensionSystem.html",
		applyLabel: "Enrol through your bank",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "igndps-widow-pension",
		name: "Indira Gandhi National Widow Pension Scheme (NSAP)",
		level: "central",
		department: "National Social Assistance Programme",
		ministry: "Ministry of Rural Development",
		categories: [
			"pension",
			"women",
			"social_welfare",
			"financial"
		],
		benefitType: "pension",
		benefitSummary: "Monthly pension for BPL widows aged 40 and above",
		overview: "Part of the National Social Assistance Programme, this scheme provides a monthly central pension to widows aged 40 years and above from families living below the poverty line, usually topped up by an additional state contribution.",
		eligibilityText: [
			"Applicant must be a widow.",
			"Age 40 years or above (up to 79 years; thereafter the higher old age pension rate applies).",
			"The applicant's family must be living below the poverty line as per the state's BPL list.",
			"Must not be receiving any other pension for the same purpose."
		],
		criteria: [
			{
				type: "condition",
				key: "widow",
				mustBe: true,
				label: "Applicant is a widow"
			},
			{
				type: "age",
				min: 40,
				label: "Aged 40 years or above"
			},
			{
				type: "condition",
				key: "bplCard",
				mustBe: true,
				label: "Family is in the BPL list"
			},
			{
				type: "gender",
				values: ["female"],
				label: "Applicant is a woman"
			}
		],
		benefits: ["Central assistance of ₹300 per month for ages 40–79 and ₹500 per month from age 80", "Most states add a state top-up, making the total monthly amount considerably higher"],
		documents: [
			"Husband's death certificate",
			"Age proof",
			"BPL card or income certificate",
			"Aadhaar and bank account details"
		],
		applicationProcess: [
			"Apply through your Gram Panchayat, block office, municipality, or your state's social welfare portal.",
			"The local authority verifies widow status, age and BPL status.",
			"On sanction, the pension is credited monthly to the bank or post office account."
		],
		officialSourceUrl: "https://nsap.nic.in/",
		officialSourceName: "Ministry of Rural Development (NSAP)",
		applyUrl: "https://nsap.nic.in/",
		applyLabel: "NSAP portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "ignoaps-old-age-pension",
		name: "Indira Gandhi National Old Age Pension Scheme (NSAP)",
		level: "central",
		department: "National Social Assistance Programme",
		ministry: "Ministry of Rural Development",
		categories: [
			"pension",
			"senior",
			"social_welfare",
			"financial"
		],
		benefitType: "pension",
		benefitSummary: "Monthly old age pension for BPL citizens aged 60 and above",
		overview: "Under the National Social Assistance Programme, citizens aged 60 years and above from below-poverty-line households receive a monthly old age pension, generally supplemented by a state top-up.",
		eligibilityText: [
			"Age 60 years or above.",
			"Household must be below the poverty line as per the state's BPL list.",
			"Should not be receiving another pension for the same purpose."
		],
		criteria: [{
			type: "age",
			min: 60,
			label: "Aged 60 years or above"
		}, {
			type: "condition",
			key: "bplCard",
			mustBe: true,
			label: "Household is in the BPL list"
		}],
		benefits: ["₹200 per month for ages 60–79 and ₹500 per month from age 80 as central assistance", "State governments usually add a top-up amount"],
		documents: [
			"Age proof",
			"BPL card or income certificate",
			"Aadhaar",
			"Bank or post office account details"
		],
		applicationProcess: [
			"Apply through the Gram Panchayat, block or municipal office, or your state's social welfare portal.",
			"Verification of age and BPL status by the local authority.",
			"Pension is credited monthly on sanction."
		],
		officialSourceUrl: "https://nsap.nic.in/",
		officialSourceName: "Ministry of Rural Development (NSAP)",
		applyUrl: "https://nsap.nic.in/",
		applyLabel: "NSAP portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "sukanya-samriddhi-yojana",
		name: "Sukanya Samriddhi Account Yojana",
		level: "central",
		department: "Department of Posts / Department of Economic Affairs",
		ministry: "Ministry of Finance",
		categories: [
			"children",
			"women",
			"financial",
			"education"
		],
		benefitType: "cash",
		benefitSummary: "Small savings account for a girl child with a high fixed interest rate and tax benefits",
		overview: "Sukanya Samriddhi is a government-backed small savings scheme for a girl child under 10 years of age. Deposits of ₹250 to ₹1.5 lakh a year earn a notified quarterly interest rate, qualify for deduction under Section 80C, and the maturity amount is tax free.",
		eligibilityText: [
			"Account may be opened by a guardian in the name of a girl child who has not attained the age of 10 years.",
			"Only one account per girl child, and a maximum of two accounts per family (three in case of twins or triplets).",
			"Minimum deposit of ₹250 and maximum of ₹1.5 lakh in a financial year.",
			"Deposits are required for the first 15 years; the account matures 21 years from opening."
		],
		criteria: [{
			type: "condition",
			key: "girlChildUnder10",
			mustBe: true,
			label: "Has a daughter under 10 years of age"
		}],
		benefits: [
			"Government notified interest rate, revised quarterly, compounded annually",
			"Deduction under Section 80C and tax-free interest and maturity amount",
			"Partial withdrawal of up to 50% allowed for higher education after the girl turns 18"
		],
		documents: [
			"Birth certificate of the girl child",
			"Identity and address proof of the guardian",
			"Account opening form (Form-1)"
		],
		applicationProcess: [
			"Visit any post office or authorised bank branch.",
			"Submit Form-1 with the girl child's birth certificate and guardian KYC.",
			"Deposit at least ₹250 to open the account."
		],
		officialSourceUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
		officialSourceName: "India Post, Government of India",
		applyUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
		applyLabel: "Open at post office or bank",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "mgnrega",
		name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
		shortName: "MGNREGA",
		level: "central",
		department: "Department of Rural Development",
		ministry: "Ministry of Rural Development",
		categories: [
			"employment",
			"financial",
			"agriculture",
			"social_welfare"
		],
		benefitType: "cash",
		benefitSummary: "Legal guarantee of 100 days of wage employment per rural household per year",
		overview: "MGNREGA guarantees at least 100 days of unskilled manual wage employment in a financial year to every rural household whose adult members volunteer for such work, with wages paid at the notified state wage rate directly into bank or post office accounts.",
		eligibilityText: [
			"Adult member (18 years or above) of a rural household willing to do unskilled manual work.",
			"Household must be residing in a rural area and registered with the Gram Panchayat for a job card.",
			"No income or category restriction — the right is universal for rural households.",
			"Work must be provided within 15 days of demand, failing which unemployment allowance is payable."
		],
		criteria: [{
			type: "age",
			min: 18,
			label: "Aged 18 years or above"
		}, {
			type: "area",
			values: ["rural"],
			label: "Lives in a rural area"
		}],
		benefits: [
			"Up to 100 days of guaranteed wage employment per household per financial year",
			"Notified state wage rate paid directly to the worker's account",
			"Work provided within 5 km of the village, or extra wages if farther",
			"Unemployment allowance if work is not provided within 15 days"
		],
		documents: [
			"Aadhaar of adult members",
			"Proof of residence in the village",
			"Bank or post office account details",
			"Photograph for job card"
		],
		applicationProcess: [
			"Apply to your Gram Panchayat for registration of the household.",
			"A job card is issued to the household after verification.",
			"Submit a written application for work; work must be allotted within 15 days."
		],
		officialSourceUrl: "https://nrega.nic.in/",
		officialSourceName: "Ministry of Rural Development",
		applyUrl: "https://nrega.nic.in/",
		applyLabel: "MGNREGA portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "adip-assistive-devices",
		name: "ADIP — Assistance to Disabled Persons for Purchase of Aids and Appliances",
		level: "central",
		department: "Department of Empowerment of Persons with Disabilities (DEPwD)",
		ministry: "Ministry of Social Justice and Empowerment",
		categories: [
			"disability",
			"healthcare",
			"financial",
			"subsidy"
		],
		benefitType: "in_kind",
		benefitSummary: "Free or subsidised assistive aids and appliances for persons with disability",
		overview: "The ADIP scheme assists needy persons with disability in acquiring durable, scientifically manufactured, modern, standard aids and appliances that can promote their physical, social and psychological rehabilitation.",
		eligibilityText: [
			"Person with 40% or more disability, holding a disability certificate.",
			"Monthly income from all sources up to ₹22,500 — full cost of the aid is covered up to ₹30,000 for income up to ₹15,000 per month, and 50% of the cost for income between ₹15,001 and ₹22,500 per month.",
			"Should not have received the same or similar aid from any government source in the last 3 years (1 year for children below 12)."
		],
		criteria: [{
			type: "condition",
			key: "disability",
			mustBe: true,
			label: "Person with disability (40% or more)"
		}, {
			type: "income",
			max: 27e4,
			label: "Monthly income up to ₹22,500 (₹2,70,000 per year)"
		}],
		benefits: [
			"Full cost of the aid or appliance up to ₹30,000 for lower income slabs",
			"50% of the cost for the higher income slab",
			"Includes hearing aids, motorised tricycles, prosthetics, Braille and smart devices as per the approved list"
		],
		documents: [
			"Disability certificate (UDID card preferred)",
			"Income certificate or salary slip",
			"Aadhaar",
			"Photograph and address proof"
		],
		applicationProcess: [
			"Register for a UDID card on the UDID portal if you do not already hold one.",
			"Apply through an implementing agency such as ALIMCO, a national institute, or at an ADIP assessment camp.",
			"Attend the assessment camp for measurement and fitting.",
			"The aid is distributed free or at the subsidised rate."
		],
		officialSourceUrl: "https://depwd.gov.in/scheme/scheme-of-assistance-to-disabled-persons-for-purchase-fitting-of-aids-and-appliances-adip/",
		officialSourceName: "DEPwD, Ministry of Social Justice and Empowerment",
		applyUrl: "https://www.swavlambancard.gov.in/",
		applyLabel: "UDID / Swavlamban portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "skill-india-digital",
		name: "Skill India Digital Hub — Free skill training and certification",
		level: "central",
		department: "National Skill Development Corporation",
		ministry: "Ministry of Skill Development and Entrepreneurship",
		categories: [
			"skill",
			"employment",
			"education"
		],
		benefitType: "training",
		benefitSummary: "Free short-term skill courses, certification and job linkages for youth",
		overview: "Skill India Digital Hub is the Government of India's unified platform for skilling, credit and employment. Candidates can enrol in free and low-cost short-term courses aligned to National Skill Qualification Framework levels, take assessments, earn digitally verifiable certificates and access job and apprenticeship opportunities.",
		eligibilityText: [
			"Indian citizen, generally aged 15 to 45 years depending on the course.",
			"Minimum education requirement varies by course — many short-term courses need only basic literacy.",
			"No income restriction for registration on the platform."
		],
		criteria: [{
			type: "age",
			min: 15,
			max: 45,
			label: "Aged between 15 and 45 years"
		}],
		benefits: [
			"Free and subsidised short-term skill courses across sectors",
			"Digitally verifiable skill certificates in the DigiLocker wallet",
			"Access to apprenticeship, job and self-employment opportunities"
		],
		documents: ["Aadhaar or mobile number for registration", "Education certificates as required by the chosen course"],
		applicationProcess: [
			"Register on the Skill India Digital Hub with your mobile number and complete your profile.",
			"Browse courses by sector, location and language, and enrol.",
			"Complete training and the assessment to receive a certificate."
		],
		officialSourceUrl: "https://www.skillindiadigital.gov.in/",
		officialSourceName: "Ministry of Skill Development and Entrepreneurship",
		applyUrl: "https://www.skillindiadigital.gov.in/",
		applyLabel: "Register on Skill India Digital",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "nsfdc-term-loan-sc",
		name: "NSFDC Term Loan for Self-Employment (Scheduled Castes)",
		level: "central",
		department: "National Scheduled Castes Finance and Development Corporation (NSFDC)",
		ministry: "Ministry of Social Justice and Empowerment",
		categories: [
			"loan",
			"business",
			"employment",
			"financial",
			"skill"
		],
		benefitType: "loan",
		benefitSummary: "Concessional term loans for SC persons below the double poverty line to start income generating activities",
		overview: "NSFDC provides concessional finance to Scheduled Caste persons living below the double poverty line, through State Channelising Agencies, for viable income generating activities in agriculture and allied sectors, small business, transport, services and technical trades.",
		eligibilityText: [
			"Applicant must belong to a Scheduled Caste.",
			"Annual family income must be within the double the poverty line limit notified by the Government of India — ₹98,000 for rural areas and ₹1,20,000 for urban areas.",
			"Assistance is routed through State Channelising Agencies such as the Gujarat SC Development Corporation.",
			"Preference to women, persons with disability, safai karamcharis and their dependants."
		],
		criteria: [
			{
				type: "category",
				values: ["sc"],
				label: "Belongs to Scheduled Caste"
			},
			{
				type: "income",
				max: 12e4,
				label: "Family income within the double poverty line (₹1,20,000 urban / ₹98,000 rural)"
			},
			{
				type: "age",
				min: 18,
				max: 60,
				label: "Aged between 18 and 60 years"
			}
		],
		benefits: [
			"Term loan up to 90% of the project cost at concessional interest rates (as low as 4–6% per annum)",
			"Micro credit finance for very small activities",
			"Free skill and entrepreneurship training under NSFDC training programmes"
		],
		documents: [
			"SC caste certificate",
			"Income certificate",
			"Project report / quotation",
			"Aadhaar and bank account details",
			"Residence proof"
		],
		applicationProcess: [
			"Apply to your State Channelising Agency — in Gujarat, the Gujarat Scheduled Castes Development Corporation.",
			"Submit the project proposal with caste and income certificates.",
			"The agency appraises the proposal and sanctions the loan.",
			"Loan is disbursed and repayment begins as per the sanctioned schedule."
		],
		officialSourceUrl: "https://nsfdc.nic.in/en/term-loan",
		officialSourceName: "NSFDC, Ministry of Social Justice and Empowerment",
		applyUrl: "https://nsfdc.nic.in/en/state-channelising-agencies",
		applyLabel: "Find your State Channelising Agency",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "dr-ambedkar-inter-caste-marriage",
		name: "Dr. Ambedkar Scheme for Social Integration through Inter-Caste Marriages",
		level: "central",
		department: "Dr. Ambedkar Foundation",
		ministry: "Ministry of Social Justice and Empowerment",
		categories: ["social_welfare", "financial"],
		benefitType: "cash",
		benefitSummary: "Incentive of ₹2.50 lakh to newly married inter-caste couples where one spouse is from a Scheduled Caste",
		overview: "The Dr. Ambedkar Foundation provides a one-time incentive to legally married couples where one spouse belongs to a Scheduled Caste and the other to a non-Scheduled Caste, to encourage social integration.",
		eligibilityText: [
			"One spouse must belong to a Scheduled Caste and the other to a non-Scheduled Caste.",
			"The marriage must be a first marriage for both and legally valid, registered under the Hindu Marriage Act or the Special Marriage Act.",
			"The proposal must be submitted within one year of the date of marriage.",
			"No income ceiling applies to the couple."
		],
		criteria: [
			{
				type: "maritalStatus",
				values: ["married"],
				label: "Legally married"
			},
			{
				type: "condition",
				key: "interCasteMarriage",
				mustBe: true,
				label: "Inter-caste marriage with one SC spouse"
			},
			{
				type: "age",
				min: 18,
				label: "Applicant is 18 years or older"
			}
		],
		benefits: ["One-time incentive of ₹2,50,000 to the couple", "Amount released partly as a fixed deposit in the couple's joint name"],
		documents: [
			"Marriage certificate",
			"Caste certificate of the Scheduled Caste spouse",
			"Affidavit stating it is the first marriage for both",
			"Joint bank account details and Aadhaar of both spouses"
		],
		applicationProcess: [
			"Fill the application form available on the Dr. Ambedkar Foundation website.",
			"Get it recommended by the District Collector / District Magistrate or your State Government / Member of Parliament.",
			"Submit the recommended proposal to the Dr. Ambedkar Foundation within one year of marriage."
		],
		importantDates: "Application must be submitted within one year of the date of marriage.",
		officialSourceUrl: "https://ambedkarfoundation.nic.in/",
		officialSourceName: "Dr. Ambedkar Foundation, Ministry of Social Justice and Empowerment",
		applyUrl: "https://ambedkarfoundation.nic.in/",
		applyLabel: "Scheme page & form",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOI
	},
	{
		id: "gj-mysy",
		name: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
		shortName: "MYSY",
		level: "state",
		stateCode: "GJ",
		department: "Education Department, Government of Gujarat",
		categories: [
			"scholarship",
			"education",
			"financial"
		],
		benefitType: "scholarship",
		benefitSummary: "Tuition, hostel and book assistance for meritorious Gujarat students after Class 10 and 12",
		overview: "MYSY supports meritorious students of Gujarat from families with modest incomes who pursue higher education in Gujarat — including engineering, medical, diploma, professional and general degree courses — with tuition fee assistance, hostel and food assistance and a book and instrument grant.",
		eligibilityText: [
			"Student must be a resident of Gujarat.",
			"Annual family income must not exceed ₹6,00,000.",
			"For courses after Class 12: at least 80 percentile in the Class 12 board examination. For diploma courses after Class 10: at least 80 percentile in the Class 10 board examination.",
			"Student must be admitted to a recognised course in Gujarat in the first year, or be continuing an assisted course."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "income",
				max: 6e5,
				label: "Family income up to ₹6,00,000"
			},
			{
				type: "education",
				min: "class_10",
				label: "Passed Class 10 or Class 12"
			},
			{
				type: "student",
				value: true,
				label: "Currently studying"
			},
			{
				type: "age",
				max: 30,
				label: "Student pursuing higher education"
			}
		],
		benefits: [
			"Tuition fee assistance of up to ₹2 lakh for medical and dental, and up to ₹50,000 for engineering, technology, pharmacy and other professional courses, as per scheme norms",
			"Hostel and food assistance of ₹1,200 per month for up to 10 months for students studying away from home",
			"Book and instrument assistance of ₹3,000 to ₹10,000 depending on the course"
		],
		documents: [
			"Class 10 and Class 12 marksheets",
			"Income certificate (Mamlatdar / Taluka Development Officer)",
			"Admission and fee receipt of the institution",
			"Aadhaar and bank passbook of the student",
			"Domicile / residence proof of Gujarat"
		],
		applicationProcess: [
			"Register on the MYSY portal (mysy.guj.nic.in) after securing admission.",
			"Fill the application and upload marksheets, income certificate and fee receipts.",
			"Submit the printed application with documents at the designated help centre.",
			"After verification, assistance is credited to the student's bank account."
		],
		importantDates: "Applications generally open after Class 12 results and admission rounds; check the portal for the current year's schedule.",
		officialSourceUrl: "https://mysy.guj.nic.in/",
		officialSourceName: "Education Department, Government of Gujarat",
		applyUrl: "https://mysy.guj.nic.in/",
		applyLabel: "Apply on MYSY portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-post-matric-sc",
		name: "Post Matric Scholarship for Scheduled Caste students (Gujarat)",
		level: "state",
		stateCode: "GJ",
		department: "Director of Scheduled Caste Welfare, Social Justice and Empowerment Department",
		categories: [
			"scholarship",
			"education",
			"financial",
			"social_welfare"
		],
		benefitType: "scholarship",
		benefitSummary: "Fees and maintenance allowance for Gujarat SC students studying after Class 10",
		overview: "The Gujarat Social Justice and Empowerment Department administers the post matric scholarship for Scheduled Caste students of Gujarat through the Digital Gujarat portal, covering compulsory non-refundable fees and a maintenance allowance based on the course group.",
		eligibilityText: [
			"Student must belong to a Scheduled Caste and be a resident of Gujarat.",
			"Annual family income must not exceed ₹2,50,000.",
			"Must have passed Class 10 and be studying a recognised post-matric course.",
			"Only two children of the same parents are eligible."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "category",
				values: ["sc"],
				label: "Belongs to Scheduled Caste"
			},
			{
				type: "income",
				max: 25e4,
				label: "Family income up to ₹2,50,000"
			},
			{
				type: "education",
				min: "class_10",
				label: "Passed Class 10"
			},
			{
				type: "student",
				value: true,
				label: "Currently studying"
			}
		],
		benefits: [
			"Reimbursement of compulsory non-refundable fees",
			"Monthly maintenance allowance for hostellers and day scholars by course group",
			"Direct benefit transfer to the student's bank account"
		],
		documents: [
			"SC caste certificate",
			"Income certificate",
			"Class 10 and latest marksheet",
			"Fee receipt and bonafide certificate",
			"Aadhaar and bank passbook"
		],
		applicationProcess: [
			"Register on the Digital Gujarat portal and select the scholarship service.",
			"Fill the application and upload caste, income and academic documents.",
			"The institute verifies the application online.",
			"Approved amount is credited to the student's bank account."
		],
		importantDates: "Application window is announced each academic year on the Digital Gujarat portal.",
		officialSourceUrl: "https://sje.gujarat.gov.in/",
		officialSourceName: "Social Justice and Empowerment Department, Government of Gujarat",
		applyUrl: "https://www.digitalgujarat.gov.in/",
		applyLabel: "Apply on Digital Gujarat",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-gsdc-self-employment-loan",
		name: "Self-Employment Loan for Scheduled Castes — Gujarat SC Development Corporation",
		level: "state",
		stateCode: "GJ",
		department: "Gujarat Scheduled Castes Development Corporation, Social Justice and Empowerment Department",
		categories: [
			"loan",
			"business",
			"employment",
			"financial",
			"social_welfare"
		],
		benefitType: "loan",
		benefitSummary: "Concessional loans and subsidy for SC persons in Gujarat to start a self-employment activity",
		overview: "The Gujarat Scheduled Castes Development Corporation provides subsidised term loans and margin money assistance to Scheduled Caste persons of Gujarat for small business, service, transport and craft based self-employment activities, as the State Channelising Agency for NSFDC funding.",
		eligibilityText: [
			"Applicant must belong to a Scheduled Caste and be a resident of Gujarat.",
			"Annual family income limits are as notified by the Corporation for each scheme — the double poverty line limit of ₹1,20,000 for urban and ₹98,000 for rural areas applies to NSFDC funded loans.",
			"Age generally between 18 and 50 years.",
			"Applicant must have the skill or experience relevant to the proposed activity."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "category",
				values: ["sc"],
				label: "Belongs to Scheduled Caste"
			},
			{
				type: "age",
				min: 18,
				max: 50,
				label: "Aged between 18 and 50 years"
			},
			{
				type: "condition",
				key: "entrepreneur",
				mustBe: true,
				label: "Wants to start a self-employment activity"
			}
		],
		benefits: [
			"Concessional term loan for the approved activity, with government subsidy or margin money support",
			"Interest rates significantly lower than commercial bank rates",
			"Support for transport, small trade, service and artisan activities"
		],
		documents: [
			"SC caste certificate",
			"Income certificate",
			"Aadhaar, ration card and residence proof",
			"Quotation or project proposal for the activity",
			"Bank account details"
		],
		applicationProcess: [
			"Apply online through the e-Samaj Kalyan portal of the Social Justice and Empowerment Department.",
			"Submit documents at the district office of the Corporation.",
			"The district committee scrutinises and sanctions the loan.",
			"Loan is disbursed for the approved activity."
		],
		officialSourceUrl: "https://sje.gujarat.gov.in/gsccdc/",
		officialSourceName: "Gujarat SC Development Corporation",
		applyUrl: "https://esamajkalyan.gujarat.gov.in/",
		applyLabel: "Apply on e-Samaj Kalyan",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-manav-kalyan-yojana",
		name: "Manav Kalyan Yojana",
		level: "state",
		stateCode: "GJ",
		department: "Gujarat Unorganised Labour Welfare Board, Labour and Employment Department",
		categories: [
			"employment",
			"financial",
			"skill",
			"business",
			"social_welfare"
		],
		benefitType: "in_kind",
		benefitSummary: "Free toolkits and equipment for small artisans, vendors and tradespeople in Gujarat",
		overview: "Manav Kalyan Yojana provides free tools, equipment and toolkits to economically weaker artisans, small vendors and tradespeople in Gujarat across 28 identified trades such as tailoring, carpentry, plumbing, beauty parlour work, mobile repairing, papad making and vegetable vending, so that they can earn a better livelihood.",
		eligibilityText: [
			"Applicant must be a resident of Gujarat engaged in one of the 28 notified trades.",
			"Age between 16 and 60 years.",
			"Annual family income must not exceed ₹6,00,000 as per the current notification.",
			"Applicant should be from a socially and economically weaker section, with priority to rural and BPL families."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "age",
				min: 16,
				max: 60,
				label: "Aged between 16 and 60 years"
			},
			{
				type: "income",
				max: 6e5,
				label: "Family income up to ₹6,00,000"
			}
		],
		benefits: ["Free toolkit or equipment for the chosen trade, worth several thousand rupees", "Enables self-employment without a loan or repayment obligation"],
		documents: [
			"Aadhaar and ration card",
			"Income certificate or BPL proof",
			"Proof of experience in the trade, where required",
			"Residence proof of Gujarat",
			"Recent photograph"
		],
		applicationProcess: [
			"Apply online on the e-Kutir portal of the Commissioner of Cottage and Rural Industries.",
			"Upload identity, income and trade documents.",
			"District authorities verify the application.",
			"The approved toolkit is distributed at the district or taluka level."
		],
		importantDates: "Applications open in phases each year; check the e-Kutir portal for the current window.",
		officialSourceUrl: "https://cottage.gujarat.gov.in/",
		officialSourceName: "Commissioner of Cottage and Rural Industries, Government of Gujarat",
		applyUrl: "https://e-kutir.gujarat.gov.in/",
		applyLabel: "Apply on e-Kutir portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-ganga-swarupa-vidhva-sahay",
		name: "Ganga Swarupa Economic Assistance (Vidhva Sahay) Yojana",
		level: "state",
		stateCode: "GJ",
		department: "Director of Social Defence, Social Justice and Empowerment Department",
		categories: [
			"women",
			"pension",
			"social_welfare",
			"financial"
		],
		benefitType: "pension",
		benefitSummary: "₹1,250 monthly assistance for widows in Gujarat",
		overview: "The Ganga Swarupa Yojana provides monthly financial assistance to widows in Gujarat, paid directly into the beneficiary's bank account, to help them meet basic living expenses.",
		eligibilityText: [
			"Applicant must be a widow and a resident of Gujarat.",
			"Age 18 years or above.",
			"Annual family income must not exceed ₹1,20,000 in rural areas and ₹1,50,000 in urban areas.",
			"Assistance stops on remarriage."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "condition",
				key: "widow",
				mustBe: true,
				label: "Applicant is a widow"
			},
			{
				type: "gender",
				values: ["female"],
				label: "Applicant is a woman"
			},
			{
				type: "age",
				min: 18,
				label: "Aged 18 years or above"
			},
			{
				type: "income",
				max: 15e4,
				label: "Family income within the prescribed limit"
			}
		],
		benefits: ["₹1,250 per month credited directly to the beneficiary's bank account", "Continues as long as eligibility conditions are met"],
		documents: [
			"Husband's death certificate",
			"Age and residence proof",
			"Income certificate",
			"Aadhaar and bank passbook",
			"Certificate of not having remarried"
		],
		applicationProcess: [
			"Apply at the Mamlatdar office or Jan Seva Kendra of your taluka, or online through Digital Gujarat.",
			"Submit the death certificate, income certificate and identity documents.",
			"After verification the sanction order is issued.",
			"Monthly assistance is credited to your bank account."
		],
		officialSourceUrl: "https://sje.gujarat.gov.in/dsd/",
		officialSourceName: "Director of Social Defence, Government of Gujarat",
		applyUrl: "https://www.digitalgujarat.gov.in/",
		applyLabel: "Apply on Digital Gujarat",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-kunvarbai-nu-mameru",
		name: "Kunvarbai nu Mameru Yojana",
		level: "state",
		stateCode: "GJ",
		department: "Director of Scheduled Caste Welfare / Developing Castes Welfare, Government of Gujarat",
		categories: [
			"women",
			"financial",
			"social_welfare"
		],
		benefitType: "cash",
		benefitSummary: "₹12,000 one-time marriage assistance for SC, ST and Developing Caste brides in Gujarat",
		overview: "Kunvarbai nu Mameru provides one-time financial assistance to the family of a bride belonging to Scheduled Caste, Scheduled Tribe or Socially and Educationally Backward Classes in Gujarat, at the time of her marriage.",
		eligibilityText: [
			"Bride must belong to Scheduled Caste, Scheduled Tribe or Socially and Educationally Backward Class and be a resident of Gujarat.",
			"Bride must be 18 years or older and the groom 21 years or older at the time of marriage.",
			"Annual family income must be within the limit notified for the scheme — currently ₹6,00,000.",
			"Assistance is available for up to two daughters in a family.",
			"Application must be submitted within two years of the date of marriage."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "gender",
				values: ["female"],
				label: "Applicant is a woman (bride)"
			},
			{
				type: "category",
				values: [
					"sc",
					"st",
					"obc"
				],
				label: "Belongs to SC, ST or Developing Caste"
			},
			{
				type: "age",
				min: 18,
				label: "Bride is 18 years or older"
			},
			{
				type: "income",
				max: 6e5,
				label: "Family income up to ₹6,00,000"
			},
			{
				type: "maritalStatus",
				values: ["married"],
				label: "Recently married"
			}
		],
		benefits: ["One-time assistance of ₹12,000 credited to the bride's bank account"],
		documents: [
			"Marriage certificate / marriage registration",
			"Caste certificate",
			"Income certificate",
			"Age proof of bride and groom",
			"Aadhaar and bank passbook of the bride"
		],
		applicationProcess: [
			"Apply online on the e-Samaj Kalyan portal within two years of the marriage.",
			"Upload the marriage certificate, caste and income certificates.",
			"District social welfare office verifies the application.",
			"Assistance is credited to the bride's bank account."
		],
		importantDates: "Apply within two years of the date of marriage.",
		officialSourceUrl: "https://sje.gujarat.gov.in/",
		officialSourceName: "Social Justice and Empowerment Department, Government of Gujarat",
		applyUrl: "https://esamajkalyan.gujarat.gov.in/",
		applyLabel: "Apply on e-Samaj Kalyan",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-startup-gujarat",
		name: "Gujarat Startup Assistance (Student Startup and Innovation Policy / IT-ITeS and Industrial Policy support)",
		level: "state",
		stateCode: "GJ",
		department: "Industries Commissionerate / Education Department, Government of Gujarat",
		categories: [
			"startup",
			"business",
			"employment",
			"financial"
		],
		benefitType: "subsidy",
		benefitSummary: "Sustenance allowance, prototype support and assistance for recognised Gujarat startups",
		overview: "Gujarat supports innovators and startups through its Startup and Innovation policy, offering sustenance allowance to founders, assistance for prototype development, mentoring through recognised nodal institutions, and cost support for enrolment and marketing for startups recognised by the state.",
		eligibilityText: [
			"Startup or innovator based in Gujarat, working through a nodal institution recognised by the Government of Gujarat.",
			"The idea must be innovative and at the proof-of-concept, prototype or early commercialisation stage.",
			"Startups must be within the age limits set by the operative policy since incorporation.",
			"Assistance is sanctioned by the state level committee through the recognised nodal institution."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Based in Gujarat"
			},
			{
				type: "age",
				min: 18,
				label: "Founder is 18 years or older"
			},
			{
				type: "condition",
				key: "entrepreneur",
				mustBe: true,
				label: "Building an innovative startup or product"
			}
		],
		benefits: [
			"Monthly sustenance allowance to the innovator for up to one year as per the operative policy",
			"Assistance towards prototype or proof of concept development",
			"Support for mentoring, IPR cost and marketing / participation in events"
		],
		documents: [
			"Detailed project or innovation report",
			"Incorporation or registration documents, where applicable",
			"Recommendation of the recognised nodal institution",
			"Aadhaar and bank details of the innovator"
		],
		applicationProcess: [
			"Identify and approach a nodal institution recognised by the Government of Gujarat.",
			"Submit your innovation proposal through the Startup Gujarat portal.",
			"The nodal institution and state committee evaluate the proposal.",
			"On approval, assistance is released as per the sanctioned components."
		],
		officialSourceUrl: "https://startup.gujarat.gov.in/",
		officialSourceName: "Startup Gujarat, Government of Gujarat",
		applyUrl: "https://startup.gujarat.gov.in/",
		applyLabel: "Apply on Startup Gujarat",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-msme-interest-subsidy",
		name: "Gujarat MSME Interest Subsidy (Aatmanirbhar Gujarat Scheme for MSMEs)",
		level: "state",
		stateCode: "GJ",
		department: "Industries Commissionerate, Industries and Mines Department",
		categories: [
			"business",
			"subsidy",
			"employment",
			"financial",
			"loan"
		],
		benefitType: "subsidy",
		benefitSummary: "Interest subsidy and capital support for new and expanding MSMEs in Gujarat",
		overview: "Under the Aatmanirbhar Gujarat Schemes for assistance to MSMEs, the state provides interest subsidy on term loans, capital subsidy, and support for quality certification, technology acquisition and energy and water conservation for micro, small and medium enterprises setting up or expanding in Gujarat.",
		eligibilityText: [
			"Enterprise must be a micro, small or medium enterprise with Udyam registration, located in Gujarat.",
			"New enterprises, and existing enterprises undertaking expansion, diversification or modernisation, are eligible as per the operative scheme.",
			"Term loan must be sanctioned by a bank or financial institution recognised under the scheme.",
			"Application must be made within the time limit prescribed from the date of first disbursement or commercial production."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Enterprise located in Gujarat"
			},
			{
				type: "age",
				min: 18,
				label: "Applicant is 18 years or older"
			},
			{
				type: "condition",
				key: "entrepreneur",
				mustBe: true,
				label: "Running or setting up an enterprise"
			}
		],
		benefits: [
			"Interest subsidy on term loan for a specified number of years, with higher rates for micro enterprises and for enterprises in less developed talukas",
			"Capital subsidy on eligible fixed capital investment",
			"Assistance for quality certification, patent registration, technology acquisition and energy / water conservation audits"
		],
		documents: [
			"Udyam registration certificate",
			"Bank sanction letter and disbursement details of the term loan",
			"Chartered accountant certificate of investment",
			"GST registration and factory or shop establishment documents"
		],
		applicationProcess: [
			"Register the enterprise on the Industries Commissionerate's i-Khedut / Investor facilitation portal (ifp.gujarat.gov.in).",
			"File the online application for the relevant assistance component within the prescribed time limit.",
			"The District Industries Centre scrutinises and forwards the application.",
			"Subsidy is sanctioned and disbursed to the enterprise's loan account or bank account."
		],
		officialSourceUrl: "https://ic.gujarat.gov.in/",
		officialSourceName: "Industries Commissionerate, Government of Gujarat",
		applyUrl: "https://ifp.gujarat.gov.in/",
		applyLabel: "Investor Facilitation Portal",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-ma-amrutam-vatsalya",
		name: "Mukhyamantri Amrutam (MA) / MA Vatsalya Yojana",
		level: "state",
		stateCode: "GJ",
		department: "Health and Family Welfare Department, Government of Gujarat",
		categories: [
			"healthcare",
			"insurance",
			"financial",
			"social_welfare"
		],
		benefitType: "insurance",
		benefitSummary: "Cashless treatment for catastrophic illnesses for lower-income families in Gujarat",
		overview: "Mukhyamantri Amrutam and its extension MA Vatsalya provide cashless quality medical and surgical treatment for catastrophic illnesses to below-poverty-line and lower-income families of Gujarat at empanelled government and private hospitals. The scheme is implemented in convergence with Ayushman Bharat PM-JAY as PMJAY-MA.",
		eligibilityText: [
			"Family must be a resident of Gujarat.",
			"Below poverty line families, and families with an annual income up to ₹4,00,000 under MA Vatsalya, are eligible.",
			"Also extended to categories such as ASHA workers, accredited journalists, class 3 and 4 state government employees and U-WIN card holders as notified.",
			"Enrolment requires a MA / PMJAY-MA card issued after verification."
		],
		criteria: [{
			type: "state",
			values: ["GJ"],
			label: "Resident of Gujarat"
		}, {
			type: "income",
			max: 4e5,
			label: "Family income up to ₹4,00,000"
		}],
		benefits: [
			"Cashless treatment cover for catastrophic illnesses at empanelled hospitals",
			"Covers cardiovascular, renal, neurological, oncology, burns, neonatal and other notified treatments",
			"Transport allowance per hospitalisation episode as per scheme norms"
		],
		documents: [
			"Aadhaar of family members",
			"Income certificate or BPL card",
			"Ration card",
			"Passport-size photographs for card enrolment"
		],
		applicationProcess: [
			"Visit a MA card kiosk at a taluka, civic centre or empanelled hospital with your documents.",
			"Complete biometric verification and receive the MA / PMJAY-MA card.",
			"Present the card at the empanelled hospital's help desk for cashless treatment."
		],
		officialSourceUrl: "https://nha.gov.in/PM-JAY",
		officialSourceName: "Government of Gujarat Health Department / National Health Authority",
		applyUrl: "https://www.digitalgujarat.gov.in/",
		applyLabel: "Digital Gujarat services",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-ikhedut-agriculture",
		name: "i-Khedut Agriculture and Horticulture Assistance (Gujarat)",
		level: "state",
		stateCode: "GJ",
		department: "Agriculture, Farmers Welfare and Co-operation Department, Government of Gujarat",
		categories: [
			"agriculture",
			"subsidy",
			"financial"
		],
		benefitType: "subsidy",
		benefitSummary: "Subsidy on farm equipment, irrigation, horticulture and animal husbandry inputs for Gujarat farmers",
		overview: "The i-Khedut portal is the single window through which Gujarat farmers apply for subsidy components across agriculture, horticulture, animal husbandry, fisheries and land and water conservation — such as tractors and implements, micro irrigation, seeds, plant protection equipment and cattle sheds.",
		eligibilityText: [
			"Applicant must be a farmer with land records in Gujarat (7/12 or 8-A extract).",
			"Must hold an Aadhaar-linked bank account.",
			"Eligibility and subsidy rates vary by component; some components are restricted to small, marginal, SC or ST farmers or to women farmers.",
			"Each component has a limited application window announced on the portal."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Farmer in Gujarat"
			},
			{
				type: "condition",
				key: "landOwner",
				mustBe: true,
				label: "Holds agricultural land records"
			},
			{
				type: "age",
				min: 18,
				label: "Applicant is 18 years or older"
			}
		],
		benefits: [
			"Percentage subsidy on approved farm machinery, implements and irrigation systems",
			"Assistance for horticulture plantation, greenhouse and shade net structures",
			"Support for animal husbandry and fisheries components"
		],
		documents: [
			"7/12 and 8-A land record extracts",
			"Aadhaar and bank passbook",
			"Caste certificate, if claiming SC/ST component",
			"Quotation of the equipment to be purchased"
		],
		applicationProcess: [
			"Check the open component list on the i-Khedut portal.",
			"Apply online for the component during its window and print the application.",
			"Submit the signed application with land and bank documents to the village or taluka office.",
			"After pre-approval, purchase the item and claim the subsidy with the bill."
		],
		importantDates: "Each subsidy component opens for a limited period — check the i-Khedut portal regularly.",
		officialSourceUrl: "https://ikhedut.gujarat.gov.in/",
		officialSourceName: "Agriculture Department, Government of Gujarat",
		applyUrl: "https://ikhedut.gujarat.gov.in/",
		applyLabel: "Apply on i-Khedut",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-nirdhar-divyang",
		name: "Gujarat assistance for Persons with Disability (Divyang) — Social Defence schemes",
		level: "state",
		stateCode: "GJ",
		department: "Director of Social Defence, Social Justice and Empowerment Department",
		categories: [
			"disability",
			"financial",
			"social_welfare",
			"employment"
		],
		benefitType: "cash",
		benefitSummary: "Monthly assistance, ST bus concession, aids and self-employment support for divyang persons in Gujarat",
		overview: "The Director of Social Defence runs a group of schemes for persons with disability in Gujarat, including the Sant Surdas Yojana monthly assistance for persons with high-percentage disability, bus travel concession, assistive aids and appliances, and self-employment and education support.",
		eligibilityText: [
			"Applicant must be a resident of Gujarat with a disability certificate issued by a competent medical authority.",
			"Percentage of disability required varies by scheme — for example Sant Surdas Yojana requires 90% or more disability.",
			"Income limits apply to some components as notified by the department.",
			"Disability identity card / UDID is required for most benefits."
		],
		criteria: [{
			type: "state",
			values: ["GJ"],
			label: "Resident of Gujarat"
		}, {
			type: "condition",
			key: "disability",
			mustBe: true,
			label: "Person with disability holding a certificate"
		}],
		benefits: [
			"Monthly financial assistance under Sant Surdas Yojana for persons with 90% or more disability",
			"Bus travel concession on Gujarat State Road Transport Corporation services",
			"Assistive aids, appliances and education / self-employment support"
		],
		documents: [
			"Disability certificate / UDID card",
			"Aadhaar and residence proof of Gujarat",
			"Income certificate, where required",
			"Bank passbook"
		],
		applicationProcess: [
			"Apply online on the e-Samaj Kalyan portal, or at the District Social Defence Officer's office.",
			"Submit the disability certificate and supporting documents.",
			"After verification the benefit is sanctioned.",
			"Monthly assistance is credited to your bank account; aids are distributed at camps."
		],
		officialSourceUrl: "https://sje.gujarat.gov.in/dsd/",
		officialSourceName: "Director of Social Defence, Government of Gujarat",
		applyUrl: "https://esamajkalyan.gujarat.gov.in/",
		applyLabel: "Apply on e-Samaj Kalyan",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-vruddh-sahay",
		name: "Nirandhar Vruddh Sahay (Old Age Pension) — Gujarat",
		level: "state",
		stateCode: "GJ",
		department: "Director of Social Defence, Social Justice and Empowerment Department",
		categories: [
			"senior",
			"pension",
			"social_welfare",
			"financial"
		],
		benefitType: "pension",
		benefitSummary: "Monthly old age assistance for destitute senior citizens in Gujarat",
		overview: "Gujarat provides monthly financial assistance to destitute senior citizens who have no means of support, in addition to the central old age pension, with amounts varying by age slab.",
		eligibilityText: [
			"Applicant must be 60 years or above and a resident of Gujarat.",
			"Must not have a son aged 21 years or above, or the son must be unable to support the applicant as prescribed.",
			"Annual family income must be within ₹1,20,000 for rural and ₹1,50,000 for urban areas.",
			"Must not be receiving another pension for the same purpose."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "age",
				min: 60,
				label: "Aged 60 years or above"
			},
			{
				type: "income",
				max: 15e4,
				label: "Family income within the prescribed limit"
			}
		],
		benefits: ["Monthly assistance of ₹1,000 for ages 60–79 and ₹1,250 from age 80, as per current norms", "Credited directly to the beneficiary's bank or post office account"],
		documents: [
			"Age proof",
			"Income certificate",
			"Aadhaar and residence proof of Gujarat",
			"Bank passbook",
			"Certificate regarding family support status"
		],
		applicationProcess: [
			"Apply at the Mamlatdar office or Jan Seva Kendra of your taluka, or through Digital Gujarat.",
			"Submit age, income and residence documents.",
			"After verification the sanction order is issued.",
			"Monthly assistance is credited to your account."
		],
		officialSourceUrl: "https://sje.gujarat.gov.in/dsd/",
		officialSourceName: "Director of Social Defence, Government of Gujarat",
		applyUrl: "https://www.digitalgujarat.gov.in/",
		applyLabel: "Apply on Digital Gujarat",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	},
	{
		id: "gj-food-security-nfsa",
		name: "National Food Security Act ration card benefits — Gujarat",
		level: "state",
		stateCode: "GJ",
		department: "Food, Civil Supplies and Consumer Affairs Department, Government of Gujarat",
		categories: [
			"social_welfare",
			"financial",
			"children",
			"women"
		],
		benefitType: "in_kind",
		benefitSummary: "Subsidised food grains for priority households and Antyodaya families in Gujarat",
		overview: "Under the National Food Security Act, Gujarat provides subsidised food grains through fair price shops to Antyodaya Anna Yojana and Priority Household ration card holders, with entitlements per person per month and portability across the state.",
		eligibilityText: [
			"Household must hold a Gujarat ration card categorised as Antyodaya Anna Yojana or Priority Household.",
			"Inclusion is based on the state's exclusion criteria — income tax payers, government employees and households owning specified assets are generally excluded.",
			"Aadhaar seeding of all family members is required for continued entitlement."
		],
		criteria: [
			{
				type: "state",
				values: ["GJ"],
				label: "Resident of Gujarat"
			},
			{
				type: "condition",
				key: "bplCard",
				mustBe: true,
				label: "Holds an Antyodaya or Priority Household ration card"
			},
			{
				type: "condition",
				key: "incomeTaxPayer",
				mustBe: false,
				label: "No income tax payer in the household"
			}
		],
		benefits: [
			"5 kg of food grains per person per month for Priority Households and 35 kg per family for Antyodaya households",
			"Free food grains under the Pradhan Mantri Garib Kalyan Anna Yojana as notified",
			"One Nation One Ration Card portability across fair price shops"
		],
		documents: [
			"Aadhaar of all family members",
			"Existing ration card or application",
			"Residence proof",
			"Income and asset declaration"
		],
		applicationProcess: [
			"Apply for or update your ration card on the Digital Gujarat portal or at the taluka Mamlatdar / Zonal office.",
			"Complete Aadhaar seeding of all family members.",
			"Collect entitlements from your linked fair price shop using biometric authentication."
		],
		officialSourceUrl: "https://fcsca.gujarat.gov.in/",
		officialSourceName: "Food, Civil Supplies and Consumer Affairs Department, Gujarat",
		applyUrl: "https://www.digitalgujarat.gov.in/",
		applyLabel: "Apply on Digital Gujarat",
		criteriaVerifiedOn: "2026-09-01",
		dataSource: GOG
	}
];
var getSchemeById = (id) => SCHEMES.find((s) => s.id === id);
//#endregion
export { getSchemeById as n, SCHEMES as t };
