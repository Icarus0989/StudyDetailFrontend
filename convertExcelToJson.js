const xlsx = require('xlsx');
const fs = require('fs');

// 读取 Excel 文件
const workbook = xlsx.readFile('/mnt/data/Study Detail Fake Data.xlsx');

// 读取所有工作表数据
const studySheet = xlsx.utils.sheet_to_json(workbook.Sheets['Study']);
const publicationsSheet = xlsx.utils.sheet_to_json(workbook.Sheets['Publications']);
const fundingSourcesSheet = xlsx.utils.sheet_to_json(workbook.Sheets['Funding Sources']);
const piSheet = xlsx.utils.sheet_to_json(workbook.Sheets['PI']);
const studentSupervisionSheet = xlsx.utils.sheet_to_json(workbook.Sheets['Student Supervision']);

// 创建一个对象来存储合并后的数据
const studyData = studySheet.map(study => {
  return {
    id: study.id.toString(),
    studyName: study.study_nar,
    studyFullName: study.study_full,
    description: study.study_det,
    category: study.study_cat,
    logoUrl: "", // 如果有 logo 的 URL，需要手动添加或从其他地方获取
    fundingSources: fundingSourcesSheet.filter(fs => fs.study_id === study.id),
    studentSupervision: studentSupervisionSheet.filter(ss => ss.study_id === study.id),
    publications: publicationsSheet.filter(pub => pub.study_id === study.id),
    status: study.study_stat,
    type: study.study_typ,
    startYear: study.start_year,
    endYear: study.end_year,
    sponsorName: study.sponsor_r,
    studyDesign: study.study_des,
    numCountries: study.no_of_cou,
    sites: study.no_of_sit,
    participants: study.no_of_par,
    principalInvestigators: piSheet.filter(pi => pi.study_id === study.id),
    otherInfo: "" // 如果有其他信息，可以手动添加或从其他地方获取
  };
});

// 将合并后的数据写入 JSON 文件
fs.writeFileSync('src/assets/studyData.json', JSON.stringify(studyData, null, 2));

console.log('Excel data has been converted to JSON and saved to src/assets/studyData.json');
