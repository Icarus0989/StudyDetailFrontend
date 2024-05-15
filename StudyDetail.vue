<template>
  <div class="study-detail">
    <h1>{{ study.studyName }}</h1>
    <img :src="study.logoUrl" alt="Study Logo" v-if="study.logoUrl" class="study-logo" />
    <p><strong>Full Name:</strong> {{ study.studyFullName }}</p>
    <p><strong>Description:</strong> {{ study.description }}</p>
    <p><strong>Category:</strong> {{ study.category }}</p>

    <div v-if="study.fundingSources && study.fundingSources.length" class="section">
      <h2>Funding Sources</h2>
      <ul>
        <li v-for="source in study.fundingSources" :key="source.id">{{ source.name }}</li>
      </ul>
    </div>

    <div v-if="study.studentSupervision && study.studentSupervision.length" class="section">
      <h2>Student Supervision</h2>
      <ul>
        <li v-for="student in study.studentSupervision" :key="student.id">{{ student.name }}</li>
      </ul>
    </div>

    <div v-if="study.publications && study.publications.length" class="section">
      <h2>Publications</h2>
      <ul>
        <li v-for="publication in study.publications" :key="publication.id">
          <a :href="publication.linkUrl" target="_blank">{{ publication.title }}</a>
        </li>
      </ul>
    </div>

    <div class="section">
      <h2>Study Details</h2>
      <p><strong>Status:</strong> {{ study.status }}</p>
      <p><strong>Type:</strong> {{ study.type }}</p>
      <p><strong>Start Year:</strong> {{ study.startYear }}</p>
      <p><strong>End Year:</strong> {{ study.endYear }}</p>
      <p><strong>Sponsor Name:</strong> {{ study.sponsorName }}</p>
      <p><strong>Study Design:</strong> {{ study.studyDesign }}</p>
      <p><strong>Number of Countries:</strong> {{ study.numCountries }}</p>
      <p><strong>Sites:</strong> {{ study.sites }}</p>
      <p><strong>Participants:</strong> {{ study.participants }}</p>
    </div>

    <div v-if="study.principalInvestigators && study.principalInvestigators.length" class="section">
      <h2>Principal Investigators</h2>
      <ul>
        <li v-for="pi in study.principalInvestigators" :key="pi.id">{{ pi.name }}</li>
      </ul>
    </div>

    <div v-if="study.otherInfo" class="section">
      <h2>Other Information</h2>
      <p>{{ study.otherInfo }}</p>
    </div>

    <!-- Debug output -->
    <pre>{{ study }}</pre>
  </div>
</template>

<script>
import studyData from '@/assets/studyData.json';

export default {
  name: 'StudyDetail',
  props: {
    studyId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      study: {}
    };
  },
  created() {
    this.fetchStudyData();
  },
  methods: {
    fetchStudyData() {
      console.log('Loading study data for ID:', this.studyId); // Debug output
      const study = studyData.find(study => study.id === this.studyId);
      if (study) {
        this.study = study;
        console.log('Loaded study data:', this.study); // Debug output
      } else {
        console.error('Study not found for ID:', this.studyId); // Error output
      }
    }
  }
};
</script>

<style scoped>
.study-detail {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}
h1, h2 {
  color: #333;
}
.section {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
a {
  color: #1e90ff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.study-logo {
  max-width: 200px;
  margin-bottom: 20px;
}
pre {
  background: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
