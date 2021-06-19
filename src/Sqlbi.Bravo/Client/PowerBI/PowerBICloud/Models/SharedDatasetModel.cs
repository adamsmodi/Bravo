﻿using System;

namespace Sqlbi.Bravo.Client.PowerBI.PowerBICloud.Models
{
    internal class SharedDatasetModel
    {
        private const int PBIXProviderId = 7;

        private const string ExcelModelResource = "ExcelModelResource";

        public long Id { get; set; }

        public string DisplayName { get; set; }

        public string Description { get; set; }

        public string DBName { get; set; }

        public string VSName { get; set; }

        public int Permissions { get; set; }

        public string ResourceName { get; set; }

        public string LastRefreshTime { get; set; }

        public SharedDatasetUser CreatorUser { get; set; }

        public bool InsightsSupported { get; set; }

        public bool CloudRLSEnabled { get; set; }

        public string OnPremModelConnectionString { get; set; }

        public bool DirectQueryMode { get; set; }

        public int PushDataVersion { get; set; }

        public int RealTimeMode { get; set; }

        public int ContentProviderId { get; set; }

        public long? OriginalModelId { get; set; }

        public bool IsHidden { get; set; }

        public bool IsCloudModel => !DirectQueryMode && !IsPushDataEnabled && string.IsNullOrEmpty(OnPremModelConnectionString);

        public bool IsOnPremModel => !string.IsNullOrEmpty(OnPremModelConnectionString);

        public bool IsExcelWorkbook => ExcelModelResource.Equals(ResourceName, StringComparison.OrdinalIgnoreCase);

        public bool IsWritablePbixModel => IsWriteableModel && ContentProviderId == PBIXProviderId;

        public bool IsWriteableModel => (Permissions & (int)SharedDatasetPermissions.Write) == (uint)SharedDatasetPermissions.Write;

        public bool IsPushDataEnabled => PushDataVersion != 0;

        public bool IsPushStreaming => PushDataVersion != 0 && RealTimeMode != 0;
    }
}