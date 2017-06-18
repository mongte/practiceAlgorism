

class Story():
    def __init__(self):
        self.treeMap = {}
        self.totalPay = 0

    def totalSalary(self, relations):

        for boss, worker in enumerate(relations):
            print('boss', boss)
            self.treeMap[boss] = []
            for section, isTeam in enumerate(worker):
                if isTeam == 'Y':
                    self.treeMap[boss].append(section)

        for boss, teammate in self.treeMap.items():

            if len(teammate) == 0:
                self.totalPay += 1
                continue

            self._teamPay(teammate)

        print(self.totalPay)

    def _teamPay(self, teammate):
        for worker in teammate:
            if len(self.treeMap[worker]) == 0:
                self.totalPay += 1
                continue

            self._teamPay(self.treeMap[worker])



story = Story()

relations = ['NNNNNN',
            'YNYNNY',
            'YNNNNY',
            'NNNNNN',
            'YNYNNN',
            'YNNYNN']

story.totalSalary(relations)