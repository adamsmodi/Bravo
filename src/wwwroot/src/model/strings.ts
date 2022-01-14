/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
export enum strings {
    addCtrlTitle = "Open",
    aggregatedTableName = "Multiple tables",
    AnalyzeModel = "Analyze Model",
    analyzeModelSummaryPlural = `Your dataset is <strong>$0</strong> large and contains <strong>$1</strong> columns, <span class="text-highlight"><strong>$2</strong> of which are not referenced.</span>`,
    analyzeModelSummarySingular = `Your dataset is <strong>$0</strong> large and contains <strong>$1</strong> columns, <span class="text-highlight"><strong>1</strong> of which is not referenced.</span>`,
    analyzeModelTableColCardinality = "Cardinality",
    analyzeModelTableColCardinalityTooltip = "Number of unique elements",
    analyzeModelTableColColumn = "Column",
    analyzeModelTableColEntity = "Table \\ Column",
    analyzeModelTableColRows = "Rows",
    analyzeModelTableColSize = "Size",
    analyzeModelTableColTable = "Table",
    analyzeModelTableColWeight = "Weight",
    appName = "Bravo for Power BI",
    BestPractices = "Best Practices",
    collapseAllCtrlTitle = "Collapse all",
    columnWarningExplanation = `Unreferenced columns can generally be removed from the model to optimize performance. Before removing them, make sure you are not using these columns in any reports, which Bravo cannot determine.`,
    columnWarningTooltip = "This column is not referenced in your model.",
    confirmTabCloseMessage = "It seems you didn't save the changes to this document.<br>Are you sure to close it?",
    connectBrowse = "Browse",
    connectDatasetsTableEndorsementCol = "Endorsement",
    connectDatasetsTableNameCol = "Name",
    connectDatasetsTableOwnerCol = "Owner",
    connectDatasetsTableWorkspaceCol = "Workspace",
    connectDialogAttachPBIMenu = "Datasets on powerbi.com",
    connectDialogConnectPBIMenu = "Active Reports on Power BI Desktop",
    connectDialogOpenVPXMenu = "VPAX Files",
    connectDialogTitle = "Open",
    connectDragFile = "Drag a VPAX file here<br>or browse your computer",
    connectNoReports = "No active reports found.<br>Open a report with Power BI Desktop and wait for it to appear here.",
    dataUsageLink = "How your data is used?", 
    dataUsageMessage = `To format your code, Bravo sends the measures of this dataset to DAX Formatter, a service managed by SQLBI, over a secure connection.<p><strong>The service does not store your data anywhere.</strong></p><p>Some information such as the most used DAX functions, a complexity index, and average query length can be saved for statistical purposes.</p>`,
    dataUsageTitle = "How your data is used?",
    DaxFormatter = "Format DAX",
    daxFormatterAgreement = "To format DAX, Bravo sends your measures to the DAX Formatter service.",
    daxFormatterFormat = "Format Selected",
    daxFormatterFormattedCode = "Formatted (Preview)",
    daxFormatterOriginalCode = "Current",
    daxFormatterPreviewAllButton = "Preview All",
    daxFormatterPreviewButton = "Preview This",
    daxFormatterPreviewDesc = "To generate a preview, Bravo needs to send this measure to the DAX Formatter service.",
    daxFormatterSuccessSceneMessagePlural = "Congratulations, <strong>$0 measures</strong> have been successfully formatted.",
    daxFormatterSuccessSceneMessageSingular = "Congratulations, <strong>1 measure</strong> has been successfully formatted.",
    daxFormatterSummary = "Your report contains <strong>$0 measures</strong> that can be formatted.",
    daxFormatterTableColMeasure = "Measure",
    daxFormatterTableColTable = "Table",
    daxFormatterTableSelected = "$0 Selected",
    defaultTabName = "Untitled",
    dialogCancel = "Cancel",
    dialogOK = "OK",
    dialogOpen = "Open",
    docReadOnly = "Read-only",
    doneCtrlTitle = "Done",
    emailAddress = "Email address",
    emailAddressPlaceholder = "Enter your email address",

    error = "Error",
    errorDatasetsListing = "Unable to retrieve the list of datasets of Power BI Service.",
    errorDatasetsEmptyListing = "No unopened datasets available.",
    errorUnhandled = "Unhandled error - please report it and provide the trace id, if available.",
    errorNotFound = "Unable to connect to the specified resource.",
    errorNotAuthorized = "You are not authorized to view the specified resource.",
    errorNotConnected = "You are not connected to Power BI - please sign in to proceed.",
    errorReportsListing = "Unable to attach to Power BI Desktop.<br>Try to reset the application.",
    errorReportsEmptyListing = "No unopened reports available.",
    errorTimeout = "Request timeout.",
    errorAborted = "Operation aborted.",
    errorRetry = "Retry",
    errorTitle = "Whoops...",
    errorUnspecified = "Unspecified error.",

    errorNone = "Unspecified error.",
    errorTOMDatabaseDatabaseNotFound = "The database does not exist in the collection or the user does not have administrator rights to access it.",
    errorTOMDatabaseUpdateFailed = "The database update failed while saving the local changes made to the model on database server.",
    errorTOMDatabaseUpdateConflictMeasure = "The requested update conflicts with the current state of the target resource.",
    errorPBIDesktopProcessNotFound = "Power BI Desktop process is no longer running or the identifier might be expired.",
    errorPBIDesktopSSASProcessNotFound = "Power BI Desktop SSAS instance process not found.",
    errorPBIDesktopSSASConnectionNotFound = "Power BI Desktop SSAS instance connection not found.",
    errorPBIDesktopSSASDatabaseUnexpectedCount = "Power BI Desktop SSAS instance database not found.",
    errorSignInMsalExceptionOccurred = "Unexpected error in the sign-in request.",
    errorSignInMsalTimeoutExpired = "The sign-in request was canceled because the timeout period expired before the operation was completed.",

    expandAllCtrlTitle = "Expand all",
    ExportData = "Export Data",
    filterUnrefCtrlTitle = "Show Unreferenced Columns only",
    formattingMeasures = "Formatting measures...",
    goBackCtrlTitle = "Cancel and go back",
    groupByTableCtrlTitle = "Group by Table",
    helpConnectVideo = "Connect Bravo to your Data",
    helpCtrlTitle = "Help",
    ManageDates = "Manage Dates",
    menuCtrlTitle = "Collapse/Expand menu",
    openSourcePayoff = `Bravo for Power BI is an open-source tool developed and mantained by SQLBI and the Github community. Join us at`,
    otherColumnsRowName = "Smaller columns...",
    previewPlaceholder = "Select a measure to see the preview...",
    powerBiSigninTitle = "Power BI",
    powerBiSigninDescription = "Sign in to Power BI service to connect Bravo to your online datasets.",
    quickActionAttachPBITitle = "Attach to Power BI Desktop",
    quickActionConnectPBITitle = "Connect to Power BI Service",
    quickActionOpenVPXTitle = "Open a Vertipaq Analyzer file",
    refreshCtrlTitle = "Refresh",
    refreshPreviewCtrlTitle = "Refresh formatted preview",
    saveVpaxCtrlTile = "Save as VPAX",
    savingVpax = "Generating VPAX...",
    searchColumnPlaceholder = "Search Column",
    searchDatasetPlaceholder = "Search Dataset",
    searchPlaceholder = "Search",
    settingsCtrlTitle = "Settings",
    signedInCtrlTitle = "Signed in as $0",
    signIn = "Sign In",
    signInCtrlTitle = "Sign In",
    signOut = "Sign Out",
    successTitle = "Success",
    syncCtrlTitle = "Synchronize",
    themeCtrlTitle = "Change Theme",
    traceId = "Trace Id",
    welcomeHelpText = "Watch the videos below to learn how to use Bravo:",
    welcomeHelpTitle = "How to use Bravo?",
    welcomeText = "Bravo is a powerful toolkit for your Power BI datasets that you can use to quick manage models, create date tables, export data, and more. Start by opening a dataset:",
    welcomeTitle = "Welcome to Bravo for Power BI",
};