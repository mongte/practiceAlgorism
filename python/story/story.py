

class Story():
    def __init__(self):
        self.totalPay = 0

    def totalSalary(self, relations):

        teamMap = self._teamFormation(relations)
        self._payrollCalculation(teamMap)

        print(self.totalPay)

    def _teamFormation(self, relations):
        teamMap = {}
        for boss, worker in enumerate(relations):
            print('boss', boss)
            teamMap[boss] = []
            for section, isTeam in enumerate(worker):
                if isTeam == 'Y':
                    teamMap[boss].append(section)

        return teamMap

    def _payrollCalculation(self, teamMap):
        for boss, teammate in teamMap.items():
            if len(teammate) == 0:
                self.totalPay += 1
                continue

            self._teamPay(teammate, teamMap)

    def _teamPay(self, teammate, teamMap):
        for worker in teammate:
            if len(teamMap[worker]) == 0:
                self.totalPay += 1
                continue

            self._teamPay(teamMap[worker], teamMap)

story = Story()

relations = ['NNNNNN',
            'YNYNNY',
            'YNNNNY',
            'NNNNNN',
            'YNYNNN',
            'YNNYNN']

story.totalSalary(relations)
