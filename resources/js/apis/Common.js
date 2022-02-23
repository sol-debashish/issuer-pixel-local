export default {
    dateConvert: function (str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    },
    hierarchyNodeColor: function (level) {
        switch (level) {
            case 'industry':
                return '#FFC42E';
            case 'sector':
                return '#23B9DA';
            case 'subSector':
                return '#7E32D1';
            case 'group':
                return '#30174B';
            case 'subGroup':
                return '#268C8C';
            case 'echelon':
                return '#C00BAA';
            case 'subEchelon':
                return '#3851CD';
            case 'tier':
                return '#2A8BF2';
            case 'subTier':
                return '#707C97';
            case 'layer':
                return '#761B70';
            case 'subLayer':
                return '#A4C639';
            case 'deck':
                return '#FF9E00';
            case 'subDeck':
                return '#FF61F6';
            case 'floor':
                return '#60A9F6';
            case 'subFloor':
                return '#8A878D';
            case 'basement':
                return '#001479';
            case 'subBasement':
                return '#000000';
            case 'mine':
                return '#CF78AC';
            case 'subMine':
                return '#FF8B59';
        }
    },
    calculateProfileStepsPercentage: function (internalPercentage, completedPercentage) {
        return Math.ceil(completedPercentage * 100 / internalPercentage);
    },
    ViewListenNumFormatter: function(num) {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 thousands
        }else if(num >= 1000000 && num < 1000000000){
            return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
        }else if(num >= 1000000000 && num < 1000000000000){
            return (num/1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion
        }else if(num >= 1000000000000){
            return (num/1000000000000).toFixed(1) + 'T'; // convert to T for number from > 1 trillion
        }else if(num <= 999){
            return num; // if value < 1000, nothing to do
        }
    },

    populateDayListOfDate: function (date) {
        var dayList = []
        let selectedYear = new Date(date).getFullYear();
        let selectedMonth = new Date(date).getMonth();
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        let totalDays = new Date(selectedYear, (selectedMonth + 1), 0).getDate()
        if(selectedYear == currentYear && selectedMonth == currentMonth)
        {
            totalDays = new Date().getDate();
        }
        for (var index = 1; index <= totalDays; index++)
        {
            dayList[index] = index;
        }
        return dayList
    },
}
