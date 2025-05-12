import { Box, Button, Stack } from "@mui/material";

export default function Week({ selectedDay, handleClick }: { selectedDay: string, handleClick: (day: string) => void }) {
    const dayName = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    return (
        <Box sx={(theme) => ({
            overflowX: 'auto', paddingBlock: 2, gap: 2,
            display: 'grid', gridTemplateColumns: 'repeat(7, auto)',
            '& .MuiButton-root': {
                minWidth: 92,
                '&.Mui-disabled': {
                    color: 'var(--variant-containedColor)',
                    boxShadow: 'none',
                    backgroundColor: theme.palette.primary.main
                },
                '&.MuiButton-outlinedSecondary ': {
                    color: theme.palette.text.secondary,
                    borderWidth: 1, borderStyle: 'solid',
                    borderColor: theme.palette.text.secondary
                }
            },
        })}>
            {
                dayName.map((day) => {
                    return (
                        <Button key={day} onClick={() => handleClick(day)}
                            disabled={selectedDay === day ? true : false}
                            color={selectedDay === day ? 'primary' : 'secondary'}
                            variant={selectedDay === day ? 'contained' : 'outlined'}
                            sx={{ textTransform: 'capitalize' }}>{day}
                        </Button>
                    )
                })
            }
        </Box>
    );
}
