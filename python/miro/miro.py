import sys
import pprint
from itertools import permutations, chain, zip_longest
import asyncio

class MazeMaker():
    def __init__(self):
        self.maze = []
        self.moveList = []
        self.ROW = 0
        self.COL = 1

    def longestPath(self, maze, startRow, startCol, moveRow, moveCol):
        self.maze = maze
        self.maze[startRow][startCol] = 'O'
        self._mapView()

        locationTreesList = self._checkLocationTrees()

        mazeSize = (len(maze)-1, len(maze[0])-1)
        startPosition = (startRow, startCol)
        farthestPoint = self._findFarthestPoint(mazeSize, startPosition)

        self.moveList = self._bindMoveList(moveRow, moveCol)

        self._escapeRoute(startPosition, farthestPoint, locationTreesList)

    def makeMap(self, row, col, trees):
        maze = [['.' for _ in range(col)] for _ in range(row)]
        for tree in trees:
            maze[tree[0]][tree[1]] = 'X'

        return maze

    def _checkLocationTrees(self):
        locationTreesList = []
        for rowIndex, row in enumerate(self.maze):
            for colIndex, col in enumerate(row):
                if col == 'X':
                    locationTreesList.append((rowIndex, colIndex))

        return locationTreesList

    def _escapeRoute(self, startPosition, farthestPoint, locationTreesList):
        turn = 0

        currentLocation = ()
        sortMoveList = sorted(self.moveList)

        print('startPosition', startPosition)
        print('farthestPoint', farthestPoint)
        for rowAndCol in self.moveList:
            rowadd = -1 if rowAndCol[self.ROW] < 0 else 1
            coladd = -1 if rowAndCol[self.COL] < 0 else 1

            print(rowAndCol)

            for move in zip_longest(range(1, rowAndCol[self.ROW], rowadd), range(1, rowAndCol[self.COL], coladd), fillvalue=0):
                pass

            print('end')

    def _bindMoveList(self, moveRow, moveCol):
        return list(map(lambda x: x, zip(moveRow, moveCol)))

    def _mapView(self):
        for row in self.maze:
            print(row)

    def _findFarthestPoint(self, mazeSize, startPosition):
        longestDistanceList = self._longestDistanceFromMaze(mazeSize)
        farthestPoint = self._findLongestDistance(startPosition, longestDistanceList)

        return farthestPoint

    def _longestDistanceFromMaze(self, mazeSize):
        return [(0, 0), mazeSize, (0, mazeSize[self.COL]), (mazeSize[self.ROW], 0)]

    def _findLongestDistance(self, startPosition, longestDistanceList):
        longestDistance = None
        saveDistance = 0
        for distance in longestDistanceList:
            rowDistance = self._distanceCalculation(distance[self.ROW], startPosition[self.ROW])
            colDistance = self._distanceCalculation(distance[self.COL], startPosition[self.COL])
            totalDistance = rowDistance+colDistance

            if totalDistance > saveDistance:
                saveDistance = totalDistance
                longestDistance = distance

        return longestDistance

    def _distanceCalculation(self, x, y):
        return {
            x > y: x-y,
            y > x: y-x,
            x == y: 0
        }[True]

mazeRun = MazeMaker()
tree1 = []
tree3 = [(1, 0), (1, 2), (1, 4), (1, 6), (2, 4), (3, 0), (3, 5)]
maze = mazeRun.makeMap(5, 7, tree3)

startRow = 4
startCol = 0
moveRow = (1, 0, -1, 0, -2, 1)
moveCol = (0, -1, 0, 1, 3, 1)

mazeRun.longestPath(maze, startRow, startCol, moveRow, moveCol)
