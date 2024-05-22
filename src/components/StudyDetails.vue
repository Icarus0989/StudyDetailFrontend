<template>
  <div class="container">
    <div class="left">
      <div class="study-header">
        <img src="../assets/logo.png" alt="Study Logo" class="study-logo" />
        <h1>{{ studyData.studyName }}</h1>
        <h2>{{ studyData.studyFullName }}</h2>
        <p>{{ studyData.studyDescription }}</p>
      </div>
      <div class="publications">
        <h3>Publications</h3>
        <ul>
          <li v-for="pub in studyData.publications" :key="pub.link_url">
            <a :href="pub.link_url" target="_blank">{{ pub.title }}</a>
          </li>
        </ul>
      </div>
      <div class="funding">
        <h3>Funding Sources</h3>
        <ul>
          <li v-for="fund in studyData.funding" :key="fund.source">
            {{ fund.source }}
          </li>
        </ul>
      </div>
      <div class="supervision">
        <h3>Student Supervision</h3>
        <ul>
          <li v-for="sup in studyData.supervision" :key="sup.studentName">
            {{ sup.studentName }} - {{ sup.project }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="study-details">
        <h3>Study Details</h3>
        <p><strong>Category:</strong> {{ studyData.studyCategory }}</p>
        <p><strong>Type:</strong> {{ studyData.studyType }}</p>
        <p><strong>Status:</strong> {{ studyData.studyStatus }}</p>
        <p><strong>Start Year:</strong> {{ studyData.startYear }}</p>
        <p><strong>End Year:</strong> {{ studyData.endYear }}</p>
        <p><strong>Sponsor Name:</strong> {{ studyData.sponsorName }}</p>
        <p><strong>Study Design:</strong> {{ studyData.studyDesign }}</p>
        <p>
          <strong>Number of Countries:</strong> {{ studyData.numCountries }}
        </p>
        <p><strong>Number of Sites:</strong> {{ studyData.numSites }}</p>
        <p>
          <strong>Number of Participants:</strong>
          {{ studyData.numParticipants }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudyDetails",
  data() {
    return {
      studyData: {
        studyName: "PROTECT-HF",
        studyFullName:
          "Prevalence of Subclinical Atrial Fibrillation in High Risk Heart Failure Patients",
        studyCategory: "Arrhythmia",
        studyDescription:
          "Heart failure (HF) is the leading cause of hospitalization in patients > 65 years of age. Following HF hospitalization...",
        studyType: "Observational",
        studyStatus: "Completed",
        startYear: 2018,
        endYear: 2023,
        sponsorName: "PHRI",
        studyDesign: "Randomized Control Trial",
        numCountries: 26,
        numSites: 58,
        numParticipants: 1000,
        publications: [
          {
            title: "Study on XYZ",
            link_url: "https://pubmed.ncbi.nlm.nih.gov/12345678/",
          },
          {
            title: "Research ABC",
            link_url: "https://pubmed.ncbi.nlm.nih.gov/87654321/",
          },
        ],
        funding: [{ source: "NIH" }, { source: "WHO" }],
        supervision: [
          { studentName: "John Doe", project: "Heart Study" },
          { studentName: "Jane Smith", project: "Blood Pressure Study" },
        ],
      },
    };
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f8fb;
  margin: 0;
  padding: 20px;
}
.container {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 60%;
}
.right {
  width: 35%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
}
.study-header {
  background-color: #f4f8fb;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.study-header h1 {
  color: #003366;
}
.study-header h2 {
  color: #666666;
}
.study-details {
  margin-bottom: 20px;
}
.study-details h3 {
  color: #003366;
  border-bottom: 2px solid #003366;
  padding-bottom: 10px;
}
.study-details p {
  margin: 0;
  padding: 5px 0;
}
.publications,
.funding,
.supervision {
  margin-top: 20px;
}
.publications a,
.funding a {
  color: #0056b3;
  text-decoration: none;
}
.publications a:hover,
.funding a:hover {
  text-decoration: underline;
}
</style>
