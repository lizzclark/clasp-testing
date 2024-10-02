function addToSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
  const firstSheet = sheet.getSheetByName("Sheet1")
  firstSheet.appendRow(["test", "hello world", new Date()])
}