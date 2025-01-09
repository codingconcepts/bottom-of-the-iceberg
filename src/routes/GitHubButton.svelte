<script>
  export let repoUrl = "";
  export let buttonText = "";
  
  const handleClick = () => {
    window.open(repoUrl, '_blank', 'noopener,noreferrer');
  };

  $: backgroundColor = '#24292e';
  $: textColor = '#ffffff';
  $: borderColor = '#1b1f23';
</script>

<div class="button-wrapper">
  <button
    on:click={handleClick}
    class="github-button"
    style="--bg-color: {backgroundColor}; --text-color: {textColor}; --border-color: {borderColor};"
  >
    <svg
      height="20"
      width="20"
      viewBox="0 0 16 16"
      fill="currentColor"
      style="vertical-align: text-bottom;"
    >
      <path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
    <span>{buttonText}</span>
  </button>
</div>
<style>
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0rem;
    box-sizing: border-box;
  }

  .github-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    transition: background-color 0.2s ease;
  }

  .github-button:hover {
    filter: brightness(90%);
  }

  .github-button:active {
    filter: brightness(85%);
  }
</style>