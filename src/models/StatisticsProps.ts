export default interface StatisticsProps {
    /**
     * The text that would be shown in the card
     */
    text: string;
    /**
     * The value of the statistics
     */
    data: string;

    /**
     * tooltip text to be shown
     */
    tooltip?: string;

    /**
     * link to the documentation page
     */
    link?: string;
}
